import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { YorkieSchemaLexer } from '../antlr/YorkieSchemaLexer';
import { YorkieSchemaVisitor } from '../antlr/YorkieSchemaVisitor';
import { YorkieSchemaParser } from '../antlr/YorkieSchemaParser';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

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
