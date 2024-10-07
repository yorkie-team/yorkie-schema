// Generated from antlr/YorkieSchema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { YorkieSchemaListener } from "./YorkieSchemaListener";
import { YorkieSchemaVisitor } from "./YorkieSchemaVisitor";


export class YorkieSchemaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly Identifier = 31;
	public static readonly StringLiteral = 32;
	public static readonly NumberLiteral = 33;
	public static readonly BooleanLiteral = 34;
	public static readonly WS = 35;
	public static readonly RULE_document = 0;
	public static readonly RULE_declarationList = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_typeAliasDeclaration = 3;
	public static readonly RULE_variableDeclaration = 4;
	public static readonly RULE_typeAnnotation = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_unionType = 7;
	public static readonly RULE_intersectionType = 8;
	public static readonly RULE_arrayType = 9;
	public static readonly RULE_primaryType = 10;
	public static readonly RULE_primitiveType = 11;
	public static readonly RULE_objectType = 12;
	public static readonly RULE_propertySignature = 13;
	public static readonly RULE_propertyName = 14;
	public static readonly RULE_functionType = 15;
	public static readonly RULE_parameterList = 16;
	public static readonly RULE_parameter = 17;
	public static readonly RULE_yorkieType = 18;
	public static readonly RULE_typeReference = 19;
	public static readonly RULE_parenthesizedType = 20;
	public static readonly RULE_typeParameters = 21;
	public static readonly RULE_typeParameter = 22;
	public static readonly RULE_typeArguments = 23;
	public static readonly RULE_expression = 24;
	public static readonly RULE_literal = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "declarationList", "declaration", "typeAliasDeclaration", 
		"variableDeclaration", "typeAnnotation", "type", "unionType", "intersectionType", 
		"arrayType", "primaryType", "primitiveType", "objectType", "propertySignature", 
		"propertyName", "functionType", "parameterList", "parameter", "yorkieType", 
		"typeReference", "parenthesizedType", "typeParameters", "typeParameter", 
		"typeArguments", "expression", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'type'", "'='", "';'", "'let'", "':'", "'|'", "'&'", "'['", 
		"']'", "'number'", "'string'", "'boolean'", "'any'", "'void'", "'null'", 
		"'undefined'", "'{'", "'}'", "'('", "')'", "'=>'", "','", "'yorkie.Object'", 
		"'yorkie.Array'", "'yorkie.Counter'", "'yorkie.Text'", "'yorkie.Tree'", 
		"'<'", "'>'", "'extends'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Identifier", "StringLiteral", "NumberLiteral", 
		"BooleanLiteral", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(YorkieSchemaParser._LITERAL_NAMES, YorkieSchemaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return YorkieSchemaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "YorkieSchema.g4"; }

	// @Override
	public get ruleNames(): string[] { return YorkieSchemaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return YorkieSchemaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(YorkieSchemaParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, YorkieSchemaParser.RULE_document);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.declarationList();
			this.state = 53;
			this.match(YorkieSchemaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declarationList(): DeclarationListContext {
		let _localctx: DeclarationListContext = new DeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, YorkieSchemaParser.RULE_declarationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.declaration();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorkieSchemaParser.T__0 || _la === YorkieSchemaParser.T__3 || _la === YorkieSchemaParser.WS) {
				{
				{
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === YorkieSchemaParser.WS) {
					{
					{
					this.state = 56;
					this.match(YorkieSchemaParser.WS);
					}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 62;
				this.declaration();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, YorkieSchemaParser.RULE_declaration);
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YorkieSchemaParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.typeAliasDeclaration();
				}
				break;
			case YorkieSchemaParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.variableDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasDeclaration(): TypeAliasDeclarationContext {
		let _localctx: TypeAliasDeclarationContext = new TypeAliasDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, YorkieSchemaParser.RULE_typeAliasDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(YorkieSchemaParser.T__0);
			this.state = 73;
			this.match(YorkieSchemaParser.Identifier);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__27) {
				{
				this.state = 74;
				this.typeParameters();
				}
			}

			this.state = 77;
			this.match(YorkieSchemaParser.T__1);
			this.state = 78;
			this.type();
			this.state = 79;
			this.match(YorkieSchemaParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, YorkieSchemaParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(YorkieSchemaParser.T__3);
			this.state = 82;
			this.match(YorkieSchemaParser.Identifier);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__4) {
				{
				this.state = 83;
				this.typeAnnotation();
				}
			}

			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__1) {
				{
				this.state = 86;
				this.match(YorkieSchemaParser.T__1);
				this.state = 87;
				this.expression();
				}
			}

			this.state = 90;
			this.match(YorkieSchemaParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAnnotation(): TypeAnnotationContext {
		let _localctx: TypeAnnotationContext = new TypeAnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, YorkieSchemaParser.RULE_typeAnnotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(YorkieSchemaParser.T__4);
			this.state = 93;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, YorkieSchemaParser.RULE_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.unionType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unionType(): UnionTypeContext {
		let _localctx: UnionTypeContext = new UnionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, YorkieSchemaParser.RULE_unionType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.intersectionType();
			this.state = 102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 98;
					this.match(YorkieSchemaParser.T__5);
					this.state = 99;
					this.intersectionType();
					}
					}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intersectionType(): IntersectionTypeContext {
		let _localctx: IntersectionTypeContext = new IntersectionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, YorkieSchemaParser.RULE_intersectionType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.arrayType();
			this.state = 110;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 106;
					this.match(YorkieSchemaParser.T__6);
					this.state = 107;
					this.arrayType();
					}
					}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, YorkieSchemaParser.RULE_arrayType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.primaryType();
			this.state = 118;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 114;
					this.match(YorkieSchemaParser.T__7);
					this.state = 115;
					this.match(YorkieSchemaParser.T__8);
					}
					}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryType(): PrimaryTypeContext {
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, YorkieSchemaParser.RULE_primaryType);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.parenthesizedType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 122;
				this.primitiveType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 123;
				this.objectType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 124;
				this.functionType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 125;
				this.yorkieType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 126;
				this.typeReference();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, YorkieSchemaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YorkieSchemaParser.T__9) | (1 << YorkieSchemaParser.T__10) | (1 << YorkieSchemaParser.T__11) | (1 << YorkieSchemaParser.T__12) | (1 << YorkieSchemaParser.T__13) | (1 << YorkieSchemaParser.T__14) | (1 << YorkieSchemaParser.T__15))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, YorkieSchemaParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(YorkieSchemaParser.T__16);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorkieSchemaParser.Identifier || _la === YorkieSchemaParser.StringLiteral) {
				{
				{
				this.state = 132;
				this.propertySignature();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 138;
			this.match(YorkieSchemaParser.T__17);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySignature(): PropertySignatureContext {
		let _localctx: PropertySignatureContext = new PropertySignatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, YorkieSchemaParser.RULE_propertySignature);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.propertyName();
			this.state = 141;
			this.typeAnnotation();
			this.state = 142;
			this.match(YorkieSchemaParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, YorkieSchemaParser.RULE_propertyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!(_la === YorkieSchemaParser.Identifier || _la === YorkieSchemaParser.StringLiteral)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionType(): FunctionTypeContext {
		let _localctx: FunctionTypeContext = new FunctionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, YorkieSchemaParser.RULE_functionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(YorkieSchemaParser.T__18);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.Identifier) {
				{
				this.state = 147;
				this.parameterList();
				}
			}

			this.state = 150;
			this.match(YorkieSchemaParser.T__19);
			this.state = 151;
			this.match(YorkieSchemaParser.T__20);
			this.state = 152;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, YorkieSchemaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.parameter();
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorkieSchemaParser.T__21) {
				{
				{
				this.state = 155;
				this.match(YorkieSchemaParser.T__21);
				this.state = 156;
				this.parameter();
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, YorkieSchemaParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(YorkieSchemaParser.Identifier);
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__4) {
				{
				this.state = 163;
				this.typeAnnotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yorkieType(): YorkieTypeContext {
		let _localctx: YorkieTypeContext = new YorkieTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, YorkieSchemaParser.RULE_yorkieType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << YorkieSchemaParser.T__22) | (1 << YorkieSchemaParser.T__23) | (1 << YorkieSchemaParser.T__24) | (1 << YorkieSchemaParser.T__25) | (1 << YorkieSchemaParser.T__26))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, YorkieSchemaParser.RULE_typeReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(YorkieSchemaParser.Identifier);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__27) {
				{
				this.state = 169;
				this.typeArguments();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, YorkieSchemaParser.RULE_parenthesizedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(YorkieSchemaParser.T__18);
			this.state = 173;
			this.type();
			this.state = 174;
			this.match(YorkieSchemaParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameters(): TypeParametersContext {
		let _localctx: TypeParametersContext = new TypeParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, YorkieSchemaParser.RULE_typeParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(YorkieSchemaParser.T__27);
			this.state = 177;
			this.typeParameter();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorkieSchemaParser.T__21) {
				{
				{
				this.state = 178;
				this.match(YorkieSchemaParser.T__21);
				this.state = 179;
				this.typeParameter();
				}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 185;
			this.match(YorkieSchemaParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeParameter(): TypeParameterContext {
		let _localctx: TypeParameterContext = new TypeParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, YorkieSchemaParser.RULE_typeParameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(YorkieSchemaParser.Identifier);
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === YorkieSchemaParser.T__29) {
				{
				this.state = 188;
				this.match(YorkieSchemaParser.T__29);
				this.state = 189;
				this.type();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, YorkieSchemaParser.RULE_typeArguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(YorkieSchemaParser.T__27);
			this.state = 193;
			this.type();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === YorkieSchemaParser.T__21) {
				{
				{
				this.state = 194;
				this.match(YorkieSchemaParser.T__21);
				this.state = 195;
				this.type();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.match(YorkieSchemaParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, YorkieSchemaParser.RULE_expression);
		try {
			this.state = 205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case YorkieSchemaParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 203;
				this.match(YorkieSchemaParser.Identifier);
				}
				break;
			case YorkieSchemaParser.StringLiteral:
			case YorkieSchemaParser.NumberLiteral:
			case YorkieSchemaParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 204;
				this.literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, YorkieSchemaParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (YorkieSchemaParser.StringLiteral - 32)) | (1 << (YorkieSchemaParser.NumberLiteral - 32)) | (1 << (YorkieSchemaParser.BooleanLiteral - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xD4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x07\x03<\n\x03\f\x03\x0E\x03?\v\x03\x03\x03\x07\x03" +
		"B\n\x03\f\x03\x0E\x03E\v\x03\x03\x04\x03\x04\x05\x04I\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x05\x05N\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x05\x06W\n\x06\x03\x06\x03\x06\x05\x06[\n\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tg\n\t" +
		"\f\t\x0E\tj\v\t\x03\n\x03\n\x03\n\x07\no\n\n\f\n\x0E\nr\v\n\x03\v\x03" +
		"\v\x03\v\x07\vw\n\v\f\v\x0E\vz\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f" +
		"\x05\f\x82\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\x88\n\x0E\f\x0E\x0E" +
		"\x0E\x8B\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x05\x11\x97\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x07\x12\xA0\n\x12\f\x12\x0E\x12\xA3\v\x12" +
		"\x03\x13\x03\x13\x05\x13\xA7\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x05" +
		"\x15\xAD\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\xB7\n\x17\f\x17\x0E\x17\xBA\v\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\xC1\n\x18\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x07\x19\xC7\n\x19\f\x19\x0E\x19\xCA\v\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x05\x1A\xD0\n\x1A\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02" +
		".\x020\x022\x024\x02\x02\x06\x03\x02\f\x12\x03\x02!\"\x03\x02\x19\x1D" +
		"\x03\x02\"$\x02\xD0\x026\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06H\x03" +
		"\x02\x02\x02\bJ\x03\x02\x02\x02\nS\x03\x02\x02\x02\f^\x03\x02\x02\x02" +
		"\x0Ea\x03\x02\x02\x02\x10c\x03\x02\x02\x02\x12k\x03\x02\x02\x02\x14s\x03" +
		"\x02\x02\x02\x16\x81\x03\x02\x02\x02\x18\x83\x03\x02\x02\x02\x1A\x85\x03" +
		"\x02\x02\x02\x1C\x8E\x03\x02\x02\x02\x1E\x92\x03\x02\x02\x02 \x94\x03" +
		"\x02\x02\x02\"\x9C\x03\x02\x02\x02$\xA4\x03\x02\x02\x02&\xA8\x03\x02\x02" +
		"\x02(\xAA\x03\x02\x02\x02*\xAE\x03\x02\x02\x02,\xB2\x03\x02\x02\x02.\xBD" +
		"\x03\x02\x02\x020\xC2\x03\x02\x02\x022\xCF\x03\x02\x02\x024\xD1\x03\x02" +
		"\x02\x0267\x05\x04\x03\x0278\x07\x02\x02\x038\x03\x03\x02\x02\x029C\x05" +
		"\x06\x04\x02:<\x07%\x02\x02;:\x03\x02\x02\x02<?\x03\x02\x02\x02=;\x03" +
		"\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02@B\x05" +
		"\x06\x04\x02A=\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03" +
		"\x02\x02\x02D\x05\x03\x02\x02\x02EC\x03\x02\x02\x02FI\x05\b\x05\x02GI" +
		"\x05\n\x06\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02I\x07\x03\x02\x02\x02" +
		"JK\x07\x03\x02\x02KM\x07!\x02\x02LN\x05,\x17\x02ML\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02NO\x03\x02\x02\x02OP\x07\x04\x02\x02PQ\x05\x0E\b\x02QR\x07" +
		"\x05\x02\x02R\t\x03\x02\x02\x02ST\x07\x06\x02\x02TV\x07!\x02\x02UW\x05" +
		"\f\x07\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02WZ\x03\x02\x02\x02XY\x07" +
		"\x04\x02\x02Y[\x052\x1A\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03" +
		"\x02\x02\x02\\]\x07\x05\x02\x02]\v\x03\x02\x02\x02^_\x07\x07\x02\x02_" +
		"`\x05\x0E\b\x02`\r\x03\x02\x02\x02ab\x05\x10\t\x02b\x0F\x03\x02\x02\x02" +
		"ch\x05\x12\n\x02de\x07\b\x02\x02eg\x05\x12\n\x02fd\x03\x02\x02\x02gj\x03" +
		"\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x11\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02kp\x05\x14\v\x02lm\x07\t\x02\x02mo\x05\x14\v\x02nl\x03" +
		"\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02q\x13" +
		"\x03\x02\x02\x02rp\x03\x02\x02\x02sx\x05\x16\f\x02tu\x07\n\x02\x02uw\x07" +
		"\v\x02\x02vt\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03" +
		"\x02\x02\x02y\x15\x03\x02\x02\x02zx\x03\x02\x02\x02{\x82\x05*\x16\x02" +
		"|\x82\x05\x18\r\x02}\x82\x05\x1A\x0E\x02~\x82\x05 \x11\x02\x7F\x82\x05" +
		"&\x14\x02\x80\x82\x05(\x15\x02\x81{\x03\x02\x02\x02\x81|\x03\x02\x02\x02" +
		"\x81}\x03\x02\x02\x02\x81~\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81" +
		"\x80\x03\x02\x02\x02\x82\x17\x03\x02\x02\x02\x83\x84\t\x02\x02\x02\x84" +
		"\x19\x03\x02\x02\x02\x85\x89\x07\x13\x02\x02\x86\x88\x05\x1C\x0F\x02\x87" +
		"\x86\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89" +
		"\x8A\x03\x02\x02\x02\x8A\x8C\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C" +
		"\x8D\x07\x14\x02\x02\x8D\x1B\x03\x02\x02\x02\x8E\x8F\x05\x1E\x10\x02\x8F" +
		"\x90\x05\f\x07\x02\x90\x91\x07\x05\x02\x02\x91\x1D\x03\x02\x02\x02\x92" +
		"\x93\t\x03\x02\x02\x93\x1F\x03\x02\x02\x02\x94\x96\x07\x15\x02\x02\x95" +
		"\x97\x05\"\x12\x02\x96\x95\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97" +
		"\x98\x03\x02\x02\x02\x98\x99\x07\x16\x02\x02\x99\x9A\x07\x17\x02\x02\x9A" +
		"\x9B\x05\x0E\b\x02\x9B!\x03\x02\x02\x02\x9C\xA1\x05$\x13\x02\x9D\x9E\x07" +
		"\x18\x02\x02\x9E\xA0\x05$\x13\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA3\x03" +
		"\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2#\x03" +
		"\x02\x02\x02\xA3\xA1\x03\x02\x02\x02\xA4\xA6\x07!\x02\x02\xA5\xA7\x05" +
		"\f\x07\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7%\x03\x02" +
		"\x02\x02\xA8\xA9\t\x04\x02\x02\xA9\'\x03\x02\x02\x02\xAA\xAC\x07!\x02" +
		"\x02\xAB\xAD\x050\x19\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD)\x03\x02\x02\x02\xAE\xAF\x07\x15\x02\x02\xAF\xB0\x05\x0E\b\x02" +
		"\xB0\xB1\x07\x16\x02\x02\xB1+\x03\x02\x02\x02\xB2\xB3\x07\x1E\x02\x02" +
		"\xB3\xB8\x05.\x18\x02\xB4\xB5\x07\x18\x02\x02\xB5\xB7\x05.\x18\x02\xB6" +
		"\xB4\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB" +
		"\xBC\x07\x1F\x02\x02\xBC-\x03\x02\x02\x02\xBD\xC0\x07!\x02\x02\xBE\xBF" +
		"\x07 \x02\x02\xBF\xC1\x05\x0E\b\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03" +
		"\x02\x02\x02\xC1/\x03\x02\x02\x02\xC2\xC3\x07\x1E\x02\x02\xC3\xC8\x05" +
		"\x0E\b\x02\xC4\xC5\x07\x18\x02\x02\xC5\xC7\x05\x0E\b\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07\x1F" +
		"\x02\x02\xCC1\x03\x02\x02\x02\xCD\xD0\x07!\x02\x02\xCE\xD0\x054\x1B\x02" +
		"\xCF\xCD\x03\x02\x02\x02\xCF\xCE\x03\x02\x02\x02\xD03\x03\x02\x02\x02" +
		"\xD1\xD2\t\x05\x02\x02\xD25\x03\x02\x02\x02\x15=CHMVZhpx\x81\x89\x96\xA1" +
		"\xA6\xAC\xB8\xC0\xC8\xCF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!YorkieSchemaParser.__ATN) {
			YorkieSchemaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(YorkieSchemaParser._serializedATN));
		}

		return YorkieSchemaParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public declarationList(): DeclarationListContext {
		return this.getRuleContext(0, DeclarationListContext);
	}
	public EOF(): TerminalNode { return this.getToken(YorkieSchemaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_document; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationListContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(YorkieSchemaParser.WS);
		} else {
			return this.getToken(YorkieSchemaParser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_declarationList; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterDeclarationList) {
			listener.enterDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitDeclarationList) {
			listener.exitDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitDeclarationList) {
			return visitor.visitDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public typeAliasDeclaration(): TypeAliasDeclarationContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasDeclarationContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_declaration; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(YorkieSchemaParser.Identifier, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public typeParameters(): TypeParametersContext | undefined {
		return this.tryGetRuleContext(0, TypeParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeAliasDeclaration; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeAliasDeclaration) {
			listener.enterTypeAliasDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeAliasDeclaration) {
			listener.exitTypeAliasDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeAliasDeclaration) {
			return visitor.visitTypeAliasDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(YorkieSchemaParser.Identifier, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnnotationContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeAnnotation; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeAnnotation) {
			listener.enterTypeAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeAnnotation) {
			listener.exitTypeAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeAnnotation) {
			return visitor.visitTypeAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public unionType(): UnionTypeContext {
		return this.getRuleContext(0, UnionTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_type; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeContext extends ParserRuleContext {
	public intersectionType(): IntersectionTypeContext[];
	public intersectionType(i: number): IntersectionTypeContext;
	public intersectionType(i?: number): IntersectionTypeContext | IntersectionTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionTypeContext);
		} else {
			return this.getRuleContext(i, IntersectionTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_unionType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterUnionType) {
			listener.enterUnionType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitUnionType) {
			listener.exitUnionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitUnionType) {
			return visitor.visitUnionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntersectionTypeContext extends ParserRuleContext {
	public arrayType(): ArrayTypeContext[];
	public arrayType(i: number): ArrayTypeContext;
	public arrayType(i?: number): ArrayTypeContext | ArrayTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayTypeContext);
		} else {
			return this.getRuleContext(i, ArrayTypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_intersectionType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterIntersectionType) {
			listener.enterIntersectionType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitIntersectionType) {
			listener.exitIntersectionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitIntersectionType) {
			return visitor.visitIntersectionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitArrayType) {
			return visitor.visitArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public objectType(): ObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeContext);
	}
	public functionType(): FunctionTypeContext | undefined {
		return this.tryGetRuleContext(0, FunctionTypeContext);
	}
	public yorkieType(): YorkieTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieTypeContext);
	}
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_primaryType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterPrimaryType) {
			listener.enterPrimaryType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitPrimaryType) {
			listener.exitPrimaryType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitPrimaryType) {
			return visitor.visitPrimaryType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimitiveTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public propertySignature(): PropertySignatureContext[];
	public propertySignature(i: number): PropertySignatureContext;
	public propertySignature(i?: number): PropertySignatureContext | PropertySignatureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertySignatureContext);
		} else {
			return this.getRuleContext(i, PropertySignatureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_objectType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterObjectType) {
			listener.enterObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitObjectType) {
			listener.exitObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitObjectType) {
			return visitor.visitObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySignatureContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public typeAnnotation(): TypeAnnotationContext {
		return this.getRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_propertySignature; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterPropertySignature) {
			listener.enterPropertySignature(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitPropertySignature) {
			listener.exitPropertySignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitPropertySignature) {
			return visitor.visitPropertySignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.Identifier, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_propertyName; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterPropertyName) {
			listener.enterPropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitPropertyName) {
			listener.exitPropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_functionType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterFunctionType) {
			listener.enterFunctionType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitFunctionType) {
			listener.exitFunctionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitFunctionType) {
			return visitor.visitFunctionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(YorkieSchemaParser.Identifier, 0); }
	public typeAnnotation(): TypeAnnotationContext | undefined {
		return this.tryGetRuleContext(0, TypeAnnotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_parameter; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_yorkieType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterYorkieType) {
			listener.enterYorkieType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitYorkieType) {
			listener.exitYorkieType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitYorkieType) {
			return visitor.visitYorkieType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(YorkieSchemaParser.Identifier, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenthesizedTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_parenthesizedType; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterParenthesizedType) {
			listener.enterParenthesizedType(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitParenthesizedType) {
			listener.exitParenthesizedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) {
			return visitor.visitParenthesizedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParametersContext extends ParserRuleContext {
	public typeParameter(): TypeParameterContext[];
	public typeParameter(i: number): TypeParameterContext;
	public typeParameter(i?: number): TypeParameterContext | TypeParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeParameterContext);
		} else {
			return this.getRuleContext(i, TypeParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeParameters; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeParameters) {
			listener.enterTypeParameters(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeParameters) {
			listener.exitTypeParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeParameters) {
			return visitor.visitTypeParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(YorkieSchemaParser.Identifier, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeParameter; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeParameter) {
			listener.enterTypeParameter(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeParameter) {
			listener.exitTypeParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeParameter) {
			return visitor.visitTypeParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.Identifier, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_expression; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.StringLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.NumberLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(YorkieSchemaParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return YorkieSchemaParser.RULE_literal; }
	// @Override
	public enterRule(listener: YorkieSchemaListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: YorkieSchemaListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: YorkieSchemaVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


