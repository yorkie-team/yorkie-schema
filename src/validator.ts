import {
  CharStreams,
  CommonTokenStream,
  ANTLRErrorListener,
  Recognizer,
  Token,
  CommonToken,
  RecognitionException,
} from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { YorkieSchemaLexer } from '../antlr/YorkieSchemaLexer';
import { YorkieSchemaVisitor } from '../antlr/YorkieSchemaVisitor';
import { YorkieSchemaParser } from '../antlr/YorkieSchemaParser';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

export type Diagnostic = {
  severity: 'error' | 'warning' | 'info';
  message: string;
  range: {
    start: { column: number; line: number };
    end: { column: number; line: number };
  };
};

class Node {
  constructor(public name: string) {}
}

class Visitor implements YorkieSchemaVisitor<Node> {
  visit(tree: ParseTree): Node {
    return tree.accept(this);
  }
  visitChildren(node: RuleNode): Node {
    console.log(node.text);
    for (let i = 0; i < node.childCount; i++) {
      const child = node.getChild(i);
      this.visit(child);
    }
    return new Node('children');
  }
  visitTerminal(node: TerminalNode): Node {
    return new Node(node.text);
  }
  visitErrorNode(node: ErrorNode): Node {
    return new Node(node.text);
  }
}

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
    let error: Diagnostic = {
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
    const error: Diagnostic = {
      severity: 'error',
      message: msg,
      range: {
        start: { column: charPositionInLine, line },
        end: { column: charPositionInLine + 1, line },
      },
    };

    if (offendingSymbol) {
      error.range.end.column =
        charPositionInLine +
        offendingSymbol.stopIndex -
        offendingSymbol.startIndex +
        1;
    }
    this.errorList.push(error);
  }
}

export function validate(data: string): boolean {
  const stream = CharStreams.fromString(data);
  const lexer = new YorkieSchemaLexer(stream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new YorkieSchemaParser(tokens);
  const ast = parser.declaration();
  const visitor = new Visitor();
  visitor.visit(ast);

  return true;
}

export function getDiagnostics(data: string): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];

  const stream = CharStreams.fromString(data);
  const lexer = new YorkieSchemaLexer(stream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new LexerErrorListener(diagnostics));

  const tokens = new CommonTokenStream(lexer);
  const parser = new YorkieSchemaParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ParserErrorListener(diagnostics));
  parser.declaration();

  return diagnostics;
}
