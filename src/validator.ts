import {
  CharStreams,
  CommonTokenStream,
  ANTLRErrorListener,
  Recognizer,
  Token,
  CommonToken,
  RecognitionException,
} from 'antlr4ts';
import { YorkieSchemaLexer } from '../antlr/YorkieSchemaLexer';
import { YorkieSchemaParser } from '../antlr/YorkieSchemaParser';
import { YorkieSchemaListener } from '../antlr/YorkieSchemaListener';
import { TypeAliasDeclarationContext, TypeReferenceContext } from '../antlr/YorkieSchemaParser';
import { ParseTreeWalker } from 'antlr4ts/tree';

export class TypeCollectorListener implements YorkieSchemaListener {
  public symbolTable: Set<string> = new Set([]);

  public typeReferences: Array<{ typeName: string; line: number; column: number }> = [];
  public errors: Array<{ message: string; line: number; column: number }> = [];

  enterTypeAliasDeclaration(ctx: TypeAliasDeclarationContext) {
    const typeName = ctx.Identifier().text;
    this.symbolTable.add(typeName);
  }

  enterTypeReference(ctx: TypeReferenceContext) {
    const typeName = ctx.Identifier().text;
    const { line, charPositionInLine } = ctx.Identifier().symbol;
    this.typeReferences.push({
      typeName: typeName,
      line: line,
      column: charPositionInLine,
    });
  }
}

export type Diagnostic = {
  severity: 'error' | 'warning' | 'info';
  message: string;
  range: {
    start: { column: number; line: number };
    end: { column: number; line: number };
  };
};

class LexerErrorListener implements ANTLRErrorListener<number> {
  constructor(private errorList: Diagnostic[]) {}

  syntaxError<T extends number>(
    _recognizer: Recognizer<T, any>,
    _offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    const error: Diagnostic = {
      severity: 'error',
      message: msg,
      range: {
        start: { column: charPositionInLine, line },
        end: { column: charPositionInLine + 1, line },
      },
    };

    this.errorList.push(error);
  }
}

class ParserErrorListener implements ANTLRErrorListener<CommonToken> {
  constructor(private errorList: Diagnostic[]) {}

  syntaxError<T extends Token>(
    _recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    let length = 1;
    if (offendingSymbol && offendingSymbol.stopIndex >= offendingSymbol.startIndex) {
      length = offendingSymbol.stopIndex - offendingSymbol.startIndex + 1;
    }

    const error: Diagnostic = {
      severity: 'error',
      message: msg,
      range: {
        start: { column: charPositionInLine, line },
        end: { column: charPositionInLine + length, line },
      },
    };

    this.errorList.push(error);
  }
}

export function validate(data: string): { errors: Array<Diagnostic> } {
  const diagnostics: Array<Diagnostic> = [];

  const stream = CharStreams.fromString(data);
  const lexer = new YorkieSchemaLexer(stream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new LexerErrorListener(diagnostics));

  const tokens = new CommonTokenStream(lexer);
  const parser = new YorkieSchemaParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ParserErrorListener(diagnostics));

  const tree = parser.document();
  const listener = new TypeCollectorListener();
  ParseTreeWalker.DEFAULT.walk(listener as any, tree);

  listener.typeReferences.forEach((ref) => {
    if (!listener.symbolTable.has(ref.typeName)) {
      listener.errors.push({
        message: `Type '${ref.typeName}' is not defined.`,
        line: ref.line,
        column: ref.column,
      });
    }
  });

  const semanticErrors: Array<Diagnostic> = listener.errors.map((error) => {
    return {
      severity: 'error',
      message: error.message,
      range: {
        start: { column: error.column, line: error.line },
        end: { column: error.column + 1, line: error.line },
      },
    };
  });

  const errors = [...diagnostics, ...semanticErrors];

  return {
    errors,
  };
}
