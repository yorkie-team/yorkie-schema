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
import {
  TypeAliasDeclarationContext,
  TypeReferenceContext,
} from '../antlr/YorkieSchemaParser';
import { ParseTreeWalker } from 'antlr4ts/tree';

type Symbol = {
  name: string;
  line: number;
  column: number;
};

type TypeReference = {
  name: string;
  parent: string;
  line: number;
  column: number;
};

export class TypeCollectorListener implements YorkieSchemaListener {
  public symbolTable: Map<string, Symbol> = new Map();
  public errors: Array<{ message: string; line: number; column: number }> = [];

  public parent: string | null = null;
  public referenceMap: Map<string, TypeReference> = new Map();

  enterTypeAliasDeclaration(ctx: TypeAliasDeclarationContext) {
    const typeName = ctx.Identifier().text;
    const { line, charPositionInLine } = ctx.Identifier().symbol;
    this.symbolTable.set(typeName, {
      name: typeName,
      line: line,
      column: charPositionInLine,
    });
    this.parent = typeName;
  }

  enterTypeReference(ctx: TypeReferenceContext) {
    const typeName = ctx.Identifier().text;
    const { line, charPositionInLine } = ctx.Identifier().symbol;

    this.referenceMap.set(typeName, {
      name: typeName,
      parent: this.parent!,
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
    if (
      offendingSymbol &&
      offendingSymbol.stopIndex >= offendingSymbol.startIndex
    ) {
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

  // TODO(hackerwins): This is a naive implementation and performance can be improved.
  for (const [, ref] of listener.referenceMap) {
    if (!listener.symbolTable.has(ref.name)) {
      listener.errors.push({
        message: `Type '${ref.name}' is not defined.`,
        line: ref.line,
        column: ref.column,
      });
    }
  }

  for (const [, symbol] of listener.symbolTable) {
    const visited = new Set();
    let current: string | undefined = symbol.name;
    while (current) {
      // 02. Check if there is a circular reference.
      if (visited.has(current)) {
        listener.errors.push({
          message: `Circular reference detected: ${current} -> ${symbol}`,
          line: symbol.line,
          column: symbol.column,
        });
        break;
      }
      if (current === 'Document') {
        break;
      }

      visited.add(current);
      current = listener.referenceMap.get(current)?.parent;
    }

    // 03. Check if there is a type that is not in the document.
    if (!current || current !== 'Document') {
      listener.errors.push({
        message: `Type '${symbol}' is not in the document.`,
        line: symbol.line,
        column: symbol.column,
      });
    }
  }

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
