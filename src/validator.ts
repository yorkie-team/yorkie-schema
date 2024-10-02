import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { SchemaLexer } from "../antlr/SchemaLexer";
import { SchemaVisitor } from "../antlr/SchemaVisitor";
import {
  ArraySuffixContext,
  FieldContext,
  FieldListContext,
  FieldTypeContext,
  PrimitiveTypeContext,
  SchemaParser,
  SimpleTypeContext,
  StartContext,
  TypeDefinitionContext,
  TypeDefinitionsContext,
  TypeExpressionContext,
  UnionTypeContext,
  UnionTypeInnerContext,
} from "../antlr/SchemaParser";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

class Node {
  constructor(public name: string) {}
}

class Visitor implements SchemaVisitor<Node> {
  visitStart?: ((ctx: StartContext) => Node) | undefined;
  visitTypeDefinitions?: ((ctx: TypeDefinitionsContext) => Node) | undefined;
  visitTypeDefinition?: ((ctx: TypeDefinitionContext) => Node) | undefined;
  visitFieldList?: ((ctx: FieldListContext) => Node) | undefined;
  visitField?: ((ctx: FieldContext) => Node) | undefined;
  visitFieldType?: ((ctx: FieldTypeContext) => Node) | undefined;
  visitTypeExpression?: ((ctx: TypeExpressionContext) => Node) | undefined;
  visitSimpleType?: ((ctx: SimpleTypeContext) => Node) | undefined;
  visitArraySuffix?: ((ctx: ArraySuffixContext) => Node) | undefined;
  visitUnionType?: ((ctx: UnionTypeContext) => Node) | undefined;
  visitUnionTypeInner?: ((ctx: UnionTypeInnerContext) => Node) | undefined;
  visitPrimitiveType?: ((ctx: PrimitiveTypeContext) => Node) | undefined;
  visit(tree: ParseTree): Node {
    return tree.accept(this);
  }
  visitChildren(node: RuleNode): Node {
    console.log(node.text);
    for (let i = 0; i < node.childCount; i++) {
      const child = node.getChild(i);
      this.visit(child);
    }
    return new Node("children");
  }
  visitTerminal(node: TerminalNode): Node {
    return new Node(node.text);
  }
  visitErrorNode(node: ErrorNode): Node {
    throw new Error(`Syntax error at: ${node.text}`);
  }
}

export function validate(data: string): boolean {
  try {
    const stream = CharStreams.fromString(data);
    const lexer = new SchemaLexer(stream);
    const tokens = new CommonTokenStream(lexer);
    const parser = new SchemaParser(tokens);
    const ast = parser.start();
    const visitor = new Visitor();
    visitor.visit(ast);
    return true;
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return false;
  }
}
