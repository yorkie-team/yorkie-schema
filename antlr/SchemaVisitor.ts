// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartContext } from "./SchemaParser";
import { TypeDefinitionsContext } from "./SchemaParser";
import { TypeDefinitionContext } from "./SchemaParser";
import { FieldListContext } from "./SchemaParser";
import { FieldContext } from "./SchemaParser";
import { FieldTypeContext } from "./SchemaParser";
import { TypeExpressionContext } from "./SchemaParser";
import { SimpleTypeContext } from "./SchemaParser";
import { ArraySuffixContext } from "./SchemaParser";
import { UnionTypeContext } from "./SchemaParser";
import { UnionTypeInnerContext } from "./SchemaParser";
import { PrimitiveTypeContext } from "./SchemaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SchemaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SchemaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SchemaParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.typeDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinitions?: (ctx: TypeDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.typeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.fieldList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldList?: (ctx: FieldListContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.fieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldType?: (ctx: FieldTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.typeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExpression?: (ctx: TypeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.simpleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleType?: (ctx: SimpleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.arraySuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySuffix?: (ctx: ArraySuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.unionTypeInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionTypeInner?: (ctx: UnionTypeInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
}

