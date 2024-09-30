// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SchemaParser`.
 */
export interface SchemaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SchemaParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.typeDefinitions`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinitions?: (ctx: TypeDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.typeDefinitions`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinitions?: (ctx: TypeDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinition?: (ctx: TypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinition?: (ctx: TypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.fieldList`.
	 * @param ctx the parse tree
	 */
	enterFieldList?: (ctx: FieldListContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.fieldList`.
	 * @param ctx the parse tree
	 */
	exitFieldList?: (ctx: FieldListContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.fieldType`.
	 * @param ctx the parse tree
	 */
	enterFieldType?: (ctx: FieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.fieldType`.
	 * @param ctx the parse tree
	 */
	exitFieldType?: (ctx: FieldTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.typeExpression`.
	 * @param ctx the parse tree
	 */
	enterTypeExpression?: (ctx: TypeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.typeExpression`.
	 * @param ctx the parse tree
	 */
	exitTypeExpression?: (ctx: TypeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.simpleType`.
	 * @param ctx the parse tree
	 */
	enterSimpleType?: (ctx: SimpleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.simpleType`.
	 * @param ctx the parse tree
	 */
	exitSimpleType?: (ctx: SimpleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.arraySuffix`.
	 * @param ctx the parse tree
	 */
	enterArraySuffix?: (ctx: ArraySuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.arraySuffix`.
	 * @param ctx the parse tree
	 */
	exitArraySuffix?: (ctx: ArraySuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.unionType`.
	 * @param ctx the parse tree
	 */
	enterUnionType?: (ctx: UnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.unionType`.
	 * @param ctx the parse tree
	 */
	exitUnionType?: (ctx: UnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.unionTypeInner`.
	 * @param ctx the parse tree
	 */
	enterUnionTypeInner?: (ctx: UnionTypeInnerContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.unionTypeInner`.
	 * @param ctx the parse tree
	 */
	exitUnionTypeInner?: (ctx: UnionTypeInnerContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
}

