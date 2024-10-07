// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SchemaParser`.
 */
export interface SchemaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SchemaParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.definitionList`.
	 * @param ctx the parse tree
	 */
	enterDefinitionList?: (ctx: DefinitionListContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.definitionList`.
	 * @param ctx the parse tree
	 */
	exitDefinitionList?: (ctx: DefinitionListContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.fieldDefList`.
	 * @param ctx the parse tree
	 */
	enterFieldDefList?: (ctx: FieldDefListContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.fieldDefList`.
	 * @param ctx the parse tree
	 */
	exitFieldDefList?: (ctx: FieldDefListContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.fieldDef`.
	 * @param ctx the parse tree
	 */
	enterFieldDef?: (ctx: FieldDefContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.fieldDef`.
	 * @param ctx the parse tree
	 */
	exitFieldDef?: (ctx: FieldDefContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.nonUnionType`.
	 * @param ctx the parse tree
	 */
	enterNonUnionType?: (ctx: NonUnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.nonUnionType`.
	 * @param ctx the parse tree
	 */
	exitNonUnionType?: (ctx: NonUnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.nonUnionTypeL2`.
	 * @param ctx the parse tree
	 */
	enterNonUnionTypeL2?: (ctx: NonUnionTypeL2Context) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.nonUnionTypeL2`.
	 * @param ctx the parse tree
	 */
	exitNonUnionTypeL2?: (ctx: NonUnionTypeL2Context) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.typeReference`.
	 * @param ctx the parse tree
	 */
	enterTypeReference?: (ctx: TypeReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.typeReference`.
	 * @param ctx the parse tree
	 */
	exitTypeReference?: (ctx: TypeReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.objectLiteralType`.
	 * @param ctx the parse tree
	 */
	enterObjectLiteralType?: (ctx: ObjectLiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.objectLiteralType`.
	 * @param ctx the parse tree
	 */
	exitObjectLiteralType?: (ctx: ObjectLiteralTypeContext) => void;

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

	/**
	 * Enter a parse tree produced by `SchemaParser.literalType`.
	 * @param ctx the parse tree
	 */
	enterLiteralType?: (ctx: LiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.literalType`.
	 * @param ctx the parse tree
	 */
	exitLiteralType?: (ctx: LiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.booleanLiteralType`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteralType?: (ctx: BooleanLiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.booleanLiteralType`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteralType?: (ctx: BooleanLiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.numberLiteralType`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteralType?: (ctx: NumberLiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.numberLiteralType`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteralType?: (ctx: NumberLiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.stringLiteralType`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralType?: (ctx: StringLiteralTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.stringLiteralType`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralType?: (ctx: StringLiteralTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieType`.
	 * @param ctx the parse tree
	 */
	enterYorkieType?: (ctx: YorkieTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieType`.
	 * @param ctx the parse tree
	 */
	exitYorkieType?: (ctx: YorkieTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieObjectType`.
	 * @param ctx the parse tree
	 */
	enterYorkieObjectType?: (ctx: YorkieObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieObjectType`.
	 * @param ctx the parse tree
	 */
	exitYorkieObjectType?: (ctx: YorkieObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieArrayType`.
	 * @param ctx the parse tree
	 */
	enterYorkieArrayType?: (ctx: YorkieArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieArrayType`.
	 * @param ctx the parse tree
	 */
	exitYorkieArrayType?: (ctx: YorkieArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieCounterType`.
	 * @param ctx the parse tree
	 */
	enterYorkieCounterType?: (ctx: YorkieCounterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieCounterType`.
	 * @param ctx the parse tree
	 */
	exitYorkieCounterType?: (ctx: YorkieCounterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieTextType`.
	 * @param ctx the parse tree
	 */
	enterYorkieTextType?: (ctx: YorkieTextTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieTextType`.
	 * @param ctx the parse tree
	 */
	exitYorkieTextType?: (ctx: YorkieTextTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SchemaParser.yorkieTreeType`.
	 * @param ctx the parse tree
	 */
	enterYorkieTreeType?: (ctx: YorkieTreeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SchemaParser.yorkieTreeType`.
	 * @param ctx the parse tree
	 */
	exitYorkieTreeType?: (ctx: YorkieTreeTypeContext) => void;
}

