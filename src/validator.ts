import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { SchemaLexer } from "../antlr/SchemaLexer";
import { SchemaVisitor } from "../antlr/SchemaVisitor";
import {
  DocumentContext,
  DefinitionListContext,
  DefinitionContext,
  ObjectTypeDefinitionContext,
  TypeNameContext,
  FieldDefListContext,
  IdentifierContext,
  FieldDefContext,
  TypeContext,
  NonUnionTypeContext,
  NonUnionTypeL2Context,
  TypeReferenceContext,
  ObjectLiteralTypeContext,
  PrimitiveTypeContext,
  LiteralTypeContext,
  NumberLiteralTypeContext,
  BooleanLiteralTypeContext,
  StringLiteralTypeContext,
  YorkieTypeContext,
  YorkieObjectTypeContext,
  YorkieArrayTypeContext,
  YorkieCounterTypeContext,
  YorkieTextTypeContext,
  YorkieTreeTypeContext,
  SchemaParser,
} from "../antlr/SchemaParser";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

class Node {
  constructor(public name: string) {}
}

class Visitor implements SchemaVisitor<Node> {
  visitDocument?: ((ctx: DocumentContext) => Node) | undefined;
  visitDefinitionList?: ((ctx: DefinitionListContext) => Node) | undefined;
  visitDefinition?: ((ctx: DefinitionContext) => Node) | undefined;
  visitTypeName?: ((ctx: TypeNameContext) => Node) | undefined;
  visitObjectTypeDefinition?: ((ctx: ObjectTypeDefinitionContext) => Node) | undefined;
  visitFieldDefList?: ((ctx: FieldDefListContext) => Node) | undefined;
  visitTypeIdentifier?: ((ctx: IdentifierContext) => Node) | undefined;
  visitFieldDef?: ((ctx: FieldDefContext) => Node) | undefined;
  visitType?: ((ctx: TypeContext) => Node) | undefined;
  visitNonUnionType?: ((ctx: NonUnionTypeContext) => Node) | undefined;
  visitNonUnionTypeL2?: ((ctx: NonUnionTypeL2Context) => Node) | undefined;
  visitTypeReference?: ((ctx: TypeReferenceContext) => Node) | undefined;
  visitObjectLiteralType?: ((ctx: ObjectLiteralTypeContext) => Node) | undefined;
  visitPrimitiveType?: ((ctx: PrimitiveTypeContext) => Node) | undefined;
  visitLiteralType?: ((ctx: LiteralTypeContext) => Node) | undefined;
  visitNumberLiteralType?: ((ctx: NumberLiteralTypeContext) => Node) | undefined;
  visitBooleanLiteralType?: ((ctx: BooleanLiteralTypeContext) => Node) | undefined;
  visitStringLiteralType?: ((ctx: StringLiteralTypeContext) => Node) | undefined;
  visitYorkieType?: ((ctx: YorkieTypeContext) => Node) | undefined;
  visitYorkieObjectType?: ((ctx: YorkieObjectTypeContext) => Node) | undefined;
  visitYorkieArrayType?: ((ctx: YorkieArrayTypeContext) => Node) | undefined;
  visitYorkieCounterType?: ((ctx: YorkieCounterTypeContext) => Node) | undefined;
  visitYorkieTextType?: ((ctx: YorkieTextTypeContext) => Node) | undefined;
  visitYorkieTreeType?: ((ctx: YorkieTreeTypeContext) => Node) | undefined;
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
    const ast = parser.document();
    const visitor = new Visitor();
    visitor.visit(ast);
    return true;
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
    return false;
  }
}
