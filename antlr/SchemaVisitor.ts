// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./SchemaParser";
import { DefinitionListContext } from "./SchemaParser";
import { DefinitionContext } from "./SchemaParser";
import { TypeNameContext } from "./SchemaParser";
import { ObjectTypeDefinitionContext } from "./SchemaParser";
import { FieldDefListContext } from "./SchemaParser";
import { IdentifierContext } from "./SchemaParser";
import { FieldDefContext } from "./SchemaParser";
import { TypeContext } from "./SchemaParser";
import { NonUnionTypeContext } from "./SchemaParser";
import { NonUnionTypeL2Context } from "./SchemaParser";
import { TypeReferenceContext } from "./SchemaParser";
import { ObjectLiteralTypeContext } from "./SchemaParser";
import { PrimitiveTypeContext } from "./SchemaParser";
import { LiteralTypeContext } from "./SchemaParser";
import { BooleanLiteralTypeContext } from "./SchemaParser";
import { NumberLiteralTypeContext } from "./SchemaParser";
import { StringLiteralTypeContext } from "./SchemaParser";
import { YorkieTypeContext } from "./SchemaParser";
import { YorkieObjectTypeContext } from "./SchemaParser";
import { YorkieArrayTypeContext } from "./SchemaParser";
import { YorkieCounterTypeContext } from "./SchemaParser";
import { YorkieTextTypeContext } from "./SchemaParser";
import { YorkieTreeTypeContext } from "./SchemaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SchemaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SchemaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SchemaParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.definitionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionList?: (ctx: DefinitionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.fieldDefList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDefList?: (ctx: FieldDefListContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.fieldDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDef?: (ctx: FieldDefContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.nonUnionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonUnionType?: (ctx: NonUnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.nonUnionTypeL2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonUnionTypeL2?: (ctx: NonUnionTypeL2Context) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.typeReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeReference?: (ctx: TypeReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.objectLiteralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectLiteralType?: (ctx: ObjectLiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.literalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralType?: (ctx: LiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.booleanLiteralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteralType?: (ctx: BooleanLiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.numberLiteralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteralType?: (ctx: NumberLiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.stringLiteralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralType?: (ctx: StringLiteralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieType?: (ctx: YorkieTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieObjectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieObjectType?: (ctx: YorkieObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieArrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieArrayType?: (ctx: YorkieArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieCounterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieCounterType?: (ctx: YorkieCounterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieTextType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieTextType?: (ctx: YorkieTextTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SchemaParser.yorkieTreeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYorkieTreeType?: (ctx: YorkieTreeTypeContext) => Result;
}

