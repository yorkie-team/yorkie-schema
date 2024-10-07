// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { SchemaListener } from "./SchemaListener";
import { SchemaVisitor } from "./SchemaVisitor";


export class SchemaParser extends Parser {
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
	public static readonly IDENTIFIER = 13;
	public static readonly NEWLINE = 14;
	public static readonly COMMENT = 15;
	public static readonly DIGIT = 16;
	public static readonly WHITESPACE = 17;
	public static readonly YORKIE_OBJECT = 18;
	public static readonly YORKIE_ARRAY = 19;
	public static readonly YORKIE_COUNTER = 20;
	public static readonly YORKIE_TEXT = 21;
	public static readonly YORKIE_TREE = 22;
	public static readonly MINUS = 23;
	public static readonly SEMICOLON = 24;
	public static readonly LPAREN = 25;
	public static readonly RPAREN = 26;
	public static readonly LCURLY = 27;
	public static readonly RCURLY = 28;
	public static readonly GT = 29;
	public static readonly LT = 30;
	public static readonly PIPE = 31;
	public static readonly QUESTION = 32;
	public static readonly EQ = 33;
	public static readonly COMMA = 34;
	public static readonly LSQUARE = 35;
	public static readonly RSQUARE = 36;
	public static readonly DOUBLE_QUOTED_STRING = 37;
	public static readonly SINGLE_QUOTED_STRING = 38;
	public static readonly RULE_document = 0;
	public static readonly RULE_definitionList = 1;
	public static readonly RULE_definition = 2;
	public static readonly RULE_typeName = 3;
	public static readonly RULE_objectTypeDefinition = 4;
	public static readonly RULE_fieldDefList = 5;
	public static readonly RULE_identifier = 6;
	public static readonly RULE_fieldDef = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_nonUnionType = 9;
	public static readonly RULE_nonUnionTypeL2 = 10;
	public static readonly RULE_typeReference = 11;
	public static readonly RULE_objectLiteralType = 12;
	public static readonly RULE_primitiveType = 13;
	public static readonly RULE_literalType = 14;
	public static readonly RULE_booleanLiteralType = 15;
	public static readonly RULE_numberLiteralType = 16;
	public static readonly RULE_stringLiteralType = 17;
	public static readonly RULE_yorkieType = 18;
	public static readonly RULE_yorkieObjectType = 19;
	public static readonly RULE_yorkieArrayType = 20;
	public static readonly RULE_yorkieCounterType = 21;
	public static readonly RULE_yorkieTextType = 22;
	public static readonly RULE_yorkieTreeType = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "definitionList", "definition", "typeName", "objectTypeDefinition", 
		"fieldDefList", "identifier", "fieldDef", "type", "nonUnionType", "nonUnionTypeL2", 
		"typeReference", "objectLiteralType", "primitiveType", "literalType", 
		"booleanLiteralType", "numberLiteralType", "stringLiteralType", "yorkieType", 
		"yorkieObjectType", "yorkieArrayType", "yorkieCounterType", "yorkieTextType", 
		"yorkieTreeType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'type'", "':'", "'string'", "'number'", "'boolean'", "'null'", 
		"'bigint'", "'Uint8Array'", "'Date'", "'true'", "'false'", "'.'", undefined, 
		undefined, undefined, undefined, undefined, "'yorkie.Object'", "'yorkie.Array'", 
		"'yorkie.Counter'", "'yorkie.Text'", "'yorkie.Tree'", "'-'", "';'", "'('", 
		"')'", "'{'", "'}'", "'>'", "'<'", "'|'", "'?'", "'='", "','", "'['", 
		"']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", 
		"NEWLINE", "COMMENT", "DIGIT", "WHITESPACE", "YORKIE_OBJECT", "YORKIE_ARRAY", 
		"YORKIE_COUNTER", "YORKIE_TEXT", "YORKIE_TREE", "MINUS", "SEMICOLON", 
		"LPAREN", "RPAREN", "LCURLY", "RCURLY", "GT", "LT", "PIPE", "QUESTION", 
		"EQ", "COMMA", "LSQUARE", "RSQUARE", "DOUBLE_QUOTED_STRING", "SINGLE_QUOTED_STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SchemaParser._LITERAL_NAMES, SchemaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SchemaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Schema.g4"; }

	// @Override
	public get ruleNames(): string[] { return SchemaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SchemaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SchemaParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SchemaParser.RULE_document);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.definitionList();
			this.state = 49;
			this.match(SchemaParser.EOF);
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
	public definitionList(): DefinitionListContext {
		let _localctx: DefinitionListContext = new DefinitionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SchemaParser.RULE_definitionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.definition();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.T__0 || _la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SchemaParser.WHITESPACE) {
					{
					{
					this.state = 52;
					this.match(SchemaParser.WHITESPACE);
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 58;
				this.definition();
				}
				}
				this.state = 63;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SchemaParser.RULE_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.objectTypeDefinition();
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SchemaParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(SchemaParser.IDENTIFIER);
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
	public objectTypeDefinition(): ObjectTypeDefinitionContext {
		let _localctx: ObjectTypeDefinitionContext = new ObjectTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SchemaParser.RULE_objectTypeDefinition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(SchemaParser.T__0);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 69;
				this.match(SchemaParser.WHITESPACE);
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.typeName();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 76;
				this.match(SchemaParser.WHITESPACE);
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(SchemaParser.LCURLY);
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 83;
					this.match(SchemaParser.WHITESPACE);
					}
					}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.IDENTIFIER) {
				{
				this.state = 89;
				this.fieldDefList();
				}
			}

			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 92;
				this.match(SchemaParser.WHITESPACE);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(SchemaParser.RCURLY);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.SEMICOLON) {
				{
				this.state = 99;
				this.match(SchemaParser.SEMICOLON);
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
	public fieldDefList(): FieldDefListContext {
		let _localctx: FieldDefListContext = new FieldDefListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SchemaParser.RULE_fieldDefList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.fieldDef();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (SchemaParser.NEWLINE - 14)) | (1 << (SchemaParser.SEMICOLON - 14)) | (1 << (SchemaParser.COMMA - 14)))) !== 0)) {
				{
				{
				this.state = 103;
				_la = this._input.LA(1);
				if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (SchemaParser.NEWLINE - 14)) | (1 << (SchemaParser.SEMICOLON - 14)) | (1 << (SchemaParser.COMMA - 14)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 104;
				this.fieldDef();
				}
				}
				this.state = 109;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SchemaParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(SchemaParser.IDENTIFIER);
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
	public fieldDef(): FieldDefContext {
		let _localctx: FieldDefContext = new FieldDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SchemaParser.RULE_fieldDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.identifier();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.QUESTION) {
				{
				this.state = 113;
				this.match(SchemaParser.QUESTION);
				}
			}

			this.state = 116;
			this.match(SchemaParser.T__1);
			this.state = 117;
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
		this.enterRule(_localctx, 16, SchemaParser.RULE_type);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.nonUnionType();
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 120;
					this.match(SchemaParser.PIPE);
					this.state = 121;
					this.type();
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public nonUnionType(): NonUnionTypeContext {
		let _localctx: NonUnionTypeContext = new NonUnionTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SchemaParser.RULE_nonUnionType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.nonUnionTypeL2();
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.LSQUARE) {
				{
				{
				this.state = 128;
				this.match(SchemaParser.LSQUARE);
				this.state = 129;
				this.match(SchemaParser.RSQUARE);
				}
				}
				this.state = 134;
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
	public nonUnionTypeL2(): NonUnionTypeL2Context {
		let _localctx: NonUnionTypeL2Context = new NonUnionTypeL2Context(this._ctx, this.state);
		this.enterRule(_localctx, 20, SchemaParser.RULE_nonUnionTypeL2);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.match(SchemaParser.LPAREN);
				this.state = 136;
				this.type();
				this.state = 137;
				this.match(SchemaParser.RPAREN);
				}
				break;
			case SchemaParser.LCURLY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.objectLiteralType();
				}
				break;
			case SchemaParser.T__2:
			case SchemaParser.T__3:
			case SchemaParser.T__4:
			case SchemaParser.T__5:
			case SchemaParser.T__6:
			case SchemaParser.T__7:
			case SchemaParser.T__8:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
				this.primitiveType();
				}
				break;
			case SchemaParser.T__9:
			case SchemaParser.T__10:
			case SchemaParser.DIGIT:
			case SchemaParser.MINUS:
			case SchemaParser.DOUBLE_QUOTED_STRING:
			case SchemaParser.SINGLE_QUOTED_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 141;
				this.literalType();
				}
				break;
			case SchemaParser.YORKIE_OBJECT:
			case SchemaParser.YORKIE_ARRAY:
			case SchemaParser.YORKIE_COUNTER:
			case SchemaParser.YORKIE_TEXT:
			case SchemaParser.YORKIE_TREE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 142;
				this.yorkieType();
				}
				break;
			case SchemaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 143;
				this.typeReference();
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
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SchemaParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.typeName();
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
	public objectLiteralType(): ObjectLiteralTypeContext {
		let _localctx: ObjectLiteralTypeContext = new ObjectLiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SchemaParser.RULE_objectLiteralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(SchemaParser.LCURLY);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.IDENTIFIER) {
				{
				this.state = 149;
				this.fieldDefList();
				}
			}

			this.state = 152;
			this.match(SchemaParser.RCURLY);
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
		this.enterRule(_localctx, 26, SchemaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SchemaParser.T__2) | (1 << SchemaParser.T__3) | (1 << SchemaParser.T__4) | (1 << SchemaParser.T__5) | (1 << SchemaParser.T__6) | (1 << SchemaParser.T__7) | (1 << SchemaParser.T__8))) !== 0))) {
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
	public literalType(): LiteralTypeContext {
		let _localctx: LiteralTypeContext = new LiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SchemaParser.RULE_literalType);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.T__9:
			case SchemaParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.booleanLiteralType();
				}
				break;
			case SchemaParser.DIGIT:
			case SchemaParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.numberLiteralType();
				}
				break;
			case SchemaParser.DOUBLE_QUOTED_STRING:
			case SchemaParser.SINGLE_QUOTED_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
				this.stringLiteralType();
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
	public booleanLiteralType(): BooleanLiteralTypeContext {
		let _localctx: BooleanLiteralTypeContext = new BooleanLiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SchemaParser.RULE_booleanLiteralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			_la = this._input.LA(1);
			if (!(_la === SchemaParser.T__9 || _la === SchemaParser.T__10)) {
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
	public numberLiteralType(): NumberLiteralTypeContext {
		let _localctx: NumberLiteralTypeContext = new NumberLiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SchemaParser.RULE_numberLiteralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.MINUS) {
				{
				this.state = 163;
				this.match(SchemaParser.MINUS);
				}
			}

			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 166;
				this.match(SchemaParser.DIGIT);
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SchemaParser.DIGIT);
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.T__11) {
				{
				this.state = 171;
				this.match(SchemaParser.T__11);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 172;
					this.match(SchemaParser.DIGIT);
					}
					}
					this.state = 175;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === SchemaParser.DIGIT);
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
	public stringLiteralType(): StringLiteralTypeContext {
		let _localctx: StringLiteralTypeContext = new StringLiteralTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SchemaParser.RULE_stringLiteralType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			_la = this._input.LA(1);
			if (!(_la === SchemaParser.DOUBLE_QUOTED_STRING || _la === SchemaParser.SINGLE_QUOTED_STRING)) {
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
	public yorkieType(): YorkieTypeContext {
		let _localctx: YorkieTypeContext = new YorkieTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SchemaParser.RULE_yorkieType);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.YORKIE_OBJECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.yorkieObjectType();
				}
				break;
			case SchemaParser.YORKIE_ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.yorkieArrayType();
				}
				break;
			case SchemaParser.YORKIE_COUNTER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 183;
				this.yorkieCounterType();
				}
				break;
			case SchemaParser.YORKIE_TEXT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 184;
				this.yorkieTextType();
				}
				break;
			case SchemaParser.YORKIE_TREE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 185;
				this.yorkieTreeType();
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
	public yorkieObjectType(): YorkieObjectTypeContext {
		let _localctx: YorkieObjectTypeContext = new YorkieObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SchemaParser.RULE_yorkieObjectType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(SchemaParser.YORKIE_OBJECT);
			this.state = 189;
			this.match(SchemaParser.LT);
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.IDENTIFIER:
				{
				this.state = 190;
				this.typeReference();
				}
				break;
			case SchemaParser.LCURLY:
				{
				this.state = 191;
				this.objectLiteralType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 194;
			this.match(SchemaParser.GT);
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
	public yorkieArrayType(): YorkieArrayTypeContext {
		let _localctx: YorkieArrayTypeContext = new YorkieArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SchemaParser.RULE_yorkieArrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(SchemaParser.YORKIE_ARRAY);
			this.state = 197;
			this.match(SchemaParser.LT);
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.IDENTIFIER:
				{
				this.state = 198;
				this.typeReference();
				}
				break;
			case SchemaParser.LCURLY:
				{
				this.state = 199;
				this.objectLiteralType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 202;
			this.match(SchemaParser.GT);
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
	public yorkieCounterType(): YorkieCounterTypeContext {
		let _localctx: YorkieCounterTypeContext = new YorkieCounterTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SchemaParser.RULE_yorkieCounterType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(SchemaParser.YORKIE_COUNTER);
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
	public yorkieTextType(): YorkieTextTypeContext {
		let _localctx: YorkieTextTypeContext = new YorkieTextTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SchemaParser.RULE_yorkieTextType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(SchemaParser.YORKIE_TEXT);
			this.state = 207;
			this.match(SchemaParser.LT);
			this.state = 210;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.IDENTIFIER:
				{
				this.state = 208;
				this.typeReference();
				}
				break;
			case SchemaParser.LCURLY:
				{
				this.state = 209;
				this.objectLiteralType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 212;
			this.match(SchemaParser.GT);
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
	public yorkieTreeType(): YorkieTreeTypeContext {
		let _localctx: YorkieTreeTypeContext = new YorkieTreeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SchemaParser.RULE_yorkieTreeType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(SchemaParser.YORKIE_TREE);
			this.state = 215;
			this.match(SchemaParser.LT);
			this.state = 216;
			this.match(SchemaParser.GT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xDD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03" +
		"8\n\x03\f\x03\x0E\x03;\v\x03\x03\x03\x07\x03>\n\x03\f\x03\x0E\x03A\v\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06I\n\x06\f\x06" +
		"\x0E\x06L\v\x06\x03\x06\x03\x06\x07\x06P\n\x06\f\x06\x0E\x06S\v\x06\x03" +
		"\x06\x03\x06\x07\x06W\n\x06\f\x06\x0E\x06Z\v\x06\x03\x06\x05\x06]\n\x06" +
		"\x03\x06\x07\x06`\n\x06\f\x06\x0E\x06c\v\x06\x03\x06\x03\x06\x05\x06g" +
		"\n\x06\x03\x07\x03\x07\x03\x07\x07\x07l\n\x07\f\x07\x0E\x07o\v\x07\x03" +
		"\b\x03\b\x03\t\x03\t\x05\tu\n\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07" +
		"\n}\n\n\f\n\x0E\n\x80\v\n\x03\v\x03\v\x03\v\x07\v\x85\n\v\f\v\x0E\v\x88" +
		"\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x93\n" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\x99\n\x0E\x03\x0E\x03\x0E\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xA2\n\x10\x03\x11\x03\x11\x03" +
		"\x12\x05\x12\xA7\n\x12\x03\x12\x06\x12\xAA\n\x12\r\x12\x0E\x12\xAB\x03" +
		"\x12\x03\x12\x06\x12\xB0\n\x12\r\x12\x0E\x12\xB1\x05\x12\xB4\n\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\xBD\n\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xC3\n\x15\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x05\x16\xCB\n\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\xD5\n\x18\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x02\x02\x02\x1A\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x02\x02\x06\x05\x02\x10\x10\x1A\x1A$$\x03\x02\x05\v\x03\x02\f\r" +
		"\x03\x02\'(\x02\xE3\x022\x03\x02\x02\x02\x045\x03\x02\x02\x02\x06B\x03" +
		"\x02\x02\x02\bD\x03\x02\x02\x02\nF\x03\x02\x02\x02\fh\x03\x02\x02\x02" +
		"\x0Ep\x03\x02\x02\x02\x10r\x03\x02\x02\x02\x12y\x03\x02\x02\x02\x14\x81" +
		"\x03\x02\x02\x02\x16\x92\x03\x02\x02\x02\x18\x94\x03\x02\x02\x02\x1A\x96" +
		"\x03\x02\x02\x02\x1C\x9C\x03\x02\x02\x02\x1E\xA1\x03\x02\x02\x02 \xA3" +
		"\x03\x02\x02\x02\"\xA6\x03\x02\x02\x02$\xB5\x03\x02\x02\x02&\xBC\x03\x02" +
		"\x02\x02(\xBE\x03\x02\x02\x02*\xC6\x03\x02\x02\x02,\xCE\x03\x02\x02\x02" +
		".\xD0\x03\x02\x02\x020\xD8\x03\x02\x02\x0223\x05\x04\x03\x0234\x07\x02" +
		"\x02\x034\x03\x03\x02\x02\x025?\x05\x06\x04\x0268\x07\x13\x02\x0276\x03" +
		"\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02\x02:<\x03" +
		"\x02\x02\x02;9\x03\x02\x02\x02<>\x05\x06\x04\x02=9\x03\x02\x02\x02>A\x03" +
		"\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x05\x03\x02\x02\x02" +
		"A?\x03\x02\x02\x02BC\x05\n\x06\x02C\x07\x03\x02\x02\x02DE\x07\x0F\x02" +
		"\x02E\t\x03\x02\x02\x02FJ\x07\x03\x02\x02GI\x07\x13\x02\x02HG\x03\x02" +
		"\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02" +
		"\x02\x02LJ\x03\x02\x02\x02MQ\x05\b\x05\x02NP\x07\x13\x02\x02ON\x03\x02" +
		"\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02" +
		"\x02\x02SQ\x03\x02\x02\x02TX\x07\x1D\x02\x02UW\x07\x13\x02\x02VU\x03\x02" +
		"\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\\\x03" +
		"\x02\x02\x02ZX\x03\x02\x02\x02[]\x05\f\x07\x02\\[\x03\x02\x02\x02\\]\x03" +
		"\x02\x02\x02]a\x03\x02\x02\x02^`\x07\x13\x02\x02_^\x03\x02\x02\x02`c\x03" +
		"\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ca\x03" +
		"\x02\x02\x02df\x07\x1E\x02\x02eg\x07\x1A\x02\x02fe\x03\x02\x02\x02fg\x03" +
		"\x02\x02\x02g\v\x03\x02\x02\x02hm\x05\x10\t\x02ij\t\x02\x02\x02jl\x05" +
		"\x10\t\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02n\r\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x0F\x02\x02q\x0F" +
		"\x03\x02\x02\x02rt\x05\x0E\b\x02su\x07\"\x02\x02ts\x03\x02\x02\x02tu\x03" +
		"\x02\x02\x02uv\x03\x02\x02\x02vw\x07\x04\x02\x02wx\x05\x12\n\x02x\x11" +
		"\x03\x02\x02\x02y~\x05\x14\v\x02z{\x07!\x02\x02{}\x05\x12\n\x02|z\x03" +
		"\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02" +
		"\x7F\x13\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x86\x05\x16\f\x02\x82" +
		"\x83\x07%\x02\x02\x83\x85\x07&\x02\x02\x84\x82\x03\x02\x02\x02\x85\x88" +
		"\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\x15" +
		"\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\x1B\x02\x02\x8A\x8B" +
		"\x05\x12\n\x02\x8B\x8C\x07\x1C\x02\x02\x8C\x93\x03\x02\x02\x02\x8D\x93" +
		"\x05\x1A\x0E\x02\x8E\x93\x05\x1C\x0F\x02\x8F\x93\x05\x1E\x10\x02\x90\x93" +
		"\x05&\x14\x02\x91\x93\x05\x18\r\x02\x92\x89\x03\x02\x02\x02\x92\x8D\x03" +
		"\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x92\x8F\x03\x02\x02\x02\x92\x90\x03" +
		"\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\x17\x03\x02\x02\x02\x94\x95\x05" +
		"\b\x05\x02\x95\x19\x03\x02\x02\x02\x96\x98\x07\x1D\x02\x02\x97\x99\x05" +
		"\f\x07\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9A\x03" +
		"\x02\x02\x02\x9A\x9B\x07\x1E\x02\x02\x9B\x1B\x03\x02\x02\x02\x9C\x9D\t" +
		"\x03\x02\x02\x9D\x1D\x03\x02\x02\x02\x9E\xA2\x05 \x11\x02\x9F\xA2\x05" +
		"\"\x12\x02\xA0\xA2\x05$\x13\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F\x03\x02" +
		"\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x1F\x03\x02\x02\x02\xA3\xA4\t\x04" +
		"\x02\x02\xA4!\x03\x02\x02\x02\xA5\xA7\x07\x19\x02\x02\xA6\xA5\x03\x02" +
		"\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8\xAA\x07\x12" +
		"\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02" +
		"\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xB3\x03\x02\x02\x02\xAD\xAF\x07\x0E" +
		"\x02\x02\xAE\xB0\x07\x12\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02" +
		"\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02" +
		"\x02\x02\xB3\xAD\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4#\x03\x02" +
		"\x02\x02\xB5\xB6\t\x05\x02\x02\xB6%\x03\x02\x02\x02\xB7\xBD\x05(\x15\x02" +
		"\xB8\xBD\x05*\x16\x02\xB9\xBD\x05,\x17\x02\xBA\xBD\x05.\x18\x02\xBB\xBD" +
		"\x050\x19\x02\xBC\xB7\x03\x02\x02\x02\xBC\xB8\x03\x02\x02\x02\xBC\xB9" +
		"\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02\x02\xBD\'" +
		"\x03\x02\x02\x02\xBE\xBF\x07\x14\x02\x02\xBF\xC2\x07 \x02\x02\xC0\xC3" +
		"\x05\x18\r\x02\xC1\xC3\x05\x1A\x0E\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC1" +
		"\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x07\x1F\x02\x02\xC5)" +
		"\x03\x02\x02\x02\xC6\xC7\x07\x15\x02\x02\xC7\xCA\x07 \x02\x02\xC8\xCB" +
		"\x05\x18\r\x02\xC9\xCB\x05\x1A\x0E\x02\xCA\xC8\x03\x02\x02\x02\xCA\xC9" +
		"\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD\x07\x1F\x02\x02\xCD+" +
		"\x03\x02\x02\x02\xCE\xCF\x07\x16\x02\x02\xCF-\x03\x02\x02\x02\xD0\xD1" +
		"\x07\x17\x02\x02\xD1\xD4\x07 \x02\x02\xD2\xD5\x05\x18\r\x02\xD3\xD5\x05" +
		"\x1A\x0E\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD3\x03\x02\x02\x02\xD5\xD6\x03" +
		"\x02\x02\x02\xD6\xD7\x07\x1F\x02\x02\xD7/\x03\x02\x02\x02\xD8\xD9\x07" +
		"\x18\x02\x02\xD9\xDA\x07 \x02\x02\xDA\xDB\x07\x1F\x02\x02\xDB1\x03\x02" +
		"\x02\x02\x199?JQX\\afmt~\x86\x92\x98\xA1\xA6\xAB\xB1\xB3\xBC\xC2\xCA\xD4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SchemaParser.__ATN) {
			SchemaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SchemaParser._serializedATN));
		}

		return SchemaParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public definitionList(): DefinitionListContext {
		return this.getRuleContext(0, DefinitionListContext);
	}
	public EOF(): TerminalNode { return this.getToken(SchemaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_document; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionListContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.WHITESPACE);
		} else {
			return this.getToken(SchemaParser.WHITESPACE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_definitionList; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterDefinitionList) {
			listener.enterDefinitionList(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitDefinitionList) {
			listener.exitDefinitionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitDefinitionList) {
			return visitor.visitDefinitionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public objectTypeDefinition(): ObjectTypeDefinitionContext {
		return this.getRuleContext(0, ObjectTypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_definition; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SchemaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_typeName; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeDefinitionContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	public LCURLY(): TerminalNode { return this.getToken(SchemaParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SchemaParser.RCURLY, 0); }
	public WHITESPACE(): TerminalNode[];
	public WHITESPACE(i: number): TerminalNode;
	public WHITESPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.WHITESPACE);
		} else {
			return this.getToken(SchemaParser.WHITESPACE, i);
		}
	}
	public fieldDefList(): FieldDefListContext | undefined {
		return this.tryGetRuleContext(0, FieldDefListContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_objectTypeDefinition; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterObjectTypeDefinition) {
			listener.enterObjectTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitObjectTypeDefinition) {
			listener.exitObjectTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitObjectTypeDefinition) {
			return visitor.visitObjectTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDefListContext extends ParserRuleContext {
	public fieldDef(): FieldDefContext[];
	public fieldDef(i: number): FieldDefContext;
	public fieldDef(i?: number): FieldDefContext | FieldDefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldDefContext);
		} else {
			return this.getRuleContext(i, FieldDefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.COMMA);
		} else {
			return this.getToken(SchemaParser.COMMA, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.SEMICOLON);
		} else {
			return this.getToken(SchemaParser.SEMICOLON, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.NEWLINE);
		} else {
			return this.getToken(SchemaParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_fieldDefList; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterFieldDefList) {
			listener.enterFieldDefList(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitFieldDefList) {
			listener.exitFieldDefList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitFieldDefList) {
			return visitor.visitFieldDefList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SchemaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_identifier; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDefContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_fieldDef; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterFieldDef) {
			listener.enterFieldDef(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitFieldDef) {
			listener.exitFieldDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitFieldDef) {
			return visitor.visitFieldDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public nonUnionType(): NonUnionTypeContext {
		return this.getRuleContext(0, NonUnionTypeContext);
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.PIPE);
		} else {
			return this.getToken(SchemaParser.PIPE, i);
		}
	}
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
	public get ruleIndex(): number { return SchemaParser.RULE_type; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonUnionTypeContext extends ParserRuleContext {
	public nonUnionTypeL2(): NonUnionTypeL2Context {
		return this.getRuleContext(0, NonUnionTypeL2Context);
	}
	public LSQUARE(): TerminalNode[];
	public LSQUARE(i: number): TerminalNode;
	public LSQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.LSQUARE);
		} else {
			return this.getToken(SchemaParser.LSQUARE, i);
		}
	}
	public RSQUARE(): TerminalNode[];
	public RSQUARE(i: number): TerminalNode;
	public RSQUARE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.RSQUARE);
		} else {
			return this.getToken(SchemaParser.RSQUARE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_nonUnionType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterNonUnionType) {
			listener.enterNonUnionType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitNonUnionType) {
			listener.exitNonUnionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitNonUnionType) {
			return visitor.visitNonUnionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonUnionTypeL2Context extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.LPAREN, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.RPAREN, 0); }
	public objectLiteralType(): ObjectLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralTypeContext);
	}
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public literalType(): LiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, LiteralTypeContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_nonUnionTypeL2; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterNonUnionTypeL2) {
			listener.enterNonUnionTypeL2(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitNonUnionTypeL2) {
			listener.exitNonUnionTypeL2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitNonUnionTypeL2) {
			return visitor.visitNonUnionTypeL2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralTypeContext extends ParserRuleContext {
	public LCURLY(): TerminalNode { return this.getToken(SchemaParser.LCURLY, 0); }
	public RCURLY(): TerminalNode { return this.getToken(SchemaParser.RCURLY, 0); }
	public fieldDefList(): FieldDefListContext | undefined {
		return this.tryGetRuleContext(0, FieldDefListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_objectLiteralType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterObjectLiteralType) {
			listener.enterObjectLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitObjectLiteralType) {
			listener.exitObjectLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitObjectLiteralType) {
			return visitor.visitObjectLiteralType(this);
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
	public get ruleIndex(): number { return SchemaParser.RULE_primitiveType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterPrimitiveType) {
			listener.enterPrimitiveType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitPrimitiveType) {
			listener.exitPrimitiveType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitPrimitiveType) {
			return visitor.visitPrimitiveType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralTypeContext extends ParserRuleContext {
	public booleanLiteralType(): BooleanLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, BooleanLiteralTypeContext);
	}
	public numberLiteralType(): NumberLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberLiteralTypeContext);
	}
	public stringLiteralType(): StringLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_literalType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterLiteralType) {
			listener.enterLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitLiteralType) {
			listener.exitLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitLiteralType) {
			return visitor.visitLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanLiteralTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_booleanLiteralType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterBooleanLiteralType) {
			listener.enterBooleanLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitBooleanLiteralType) {
			listener.exitBooleanLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitBooleanLiteralType) {
			return visitor.visitBooleanLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberLiteralTypeContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.MINUS, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SchemaParser.DIGIT);
		} else {
			return this.getToken(SchemaParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_numberLiteralType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterNumberLiteralType) {
			listener.enterNumberLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitNumberLiteralType) {
			listener.exitNumberLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitNumberLiteralType) {
			return visitor.visitNumberLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralTypeContext extends ParserRuleContext {
	public DOUBLE_QUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.DOUBLE_QUOTED_STRING, 0); }
	public SINGLE_QUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.SINGLE_QUOTED_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_stringLiteralType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterStringLiteralType) {
			listener.enterStringLiteralType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitStringLiteralType) {
			listener.exitStringLiteralType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitStringLiteralType) {
			return visitor.visitStringLiteralType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieTypeContext extends ParserRuleContext {
	public yorkieObjectType(): YorkieObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieObjectTypeContext);
	}
	public yorkieArrayType(): YorkieArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieArrayTypeContext);
	}
	public yorkieCounterType(): YorkieCounterTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieCounterTypeContext);
	}
	public yorkieTextType(): YorkieTextTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieTextTypeContext);
	}
	public yorkieTreeType(): YorkieTreeTypeContext | undefined {
		return this.tryGetRuleContext(0, YorkieTreeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieType) {
			listener.enterYorkieType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieType) {
			listener.exitYorkieType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieType) {
			return visitor.visitYorkieType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieObjectTypeContext extends ParserRuleContext {
	public YORKIE_OBJECT(): TerminalNode { return this.getToken(SchemaParser.YORKIE_OBJECT, 0); }
	public LT(): TerminalNode { return this.getToken(SchemaParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(SchemaParser.GT, 0); }
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	public objectLiteralType(): ObjectLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieObjectType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieObjectType) {
			listener.enterYorkieObjectType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieObjectType) {
			listener.exitYorkieObjectType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieObjectType) {
			return visitor.visitYorkieObjectType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieArrayTypeContext extends ParserRuleContext {
	public YORKIE_ARRAY(): TerminalNode { return this.getToken(SchemaParser.YORKIE_ARRAY, 0); }
	public LT(): TerminalNode { return this.getToken(SchemaParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(SchemaParser.GT, 0); }
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	public objectLiteralType(): ObjectLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieArrayType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieArrayType) {
			listener.enterYorkieArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieArrayType) {
			listener.exitYorkieArrayType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieArrayType) {
			return visitor.visitYorkieArrayType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieCounterTypeContext extends ParserRuleContext {
	public YORKIE_COUNTER(): TerminalNode { return this.getToken(SchemaParser.YORKIE_COUNTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieCounterType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieCounterType) {
			listener.enterYorkieCounterType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieCounterType) {
			listener.exitYorkieCounterType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieCounterType) {
			return visitor.visitYorkieCounterType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieTextTypeContext extends ParserRuleContext {
	public YORKIE_TEXT(): TerminalNode { return this.getToken(SchemaParser.YORKIE_TEXT, 0); }
	public LT(): TerminalNode { return this.getToken(SchemaParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(SchemaParser.GT, 0); }
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	public objectLiteralType(): ObjectLiteralTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieTextType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieTextType) {
			listener.enterYorkieTextType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieTextType) {
			listener.exitYorkieTextType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieTextType) {
			return visitor.visitYorkieTextType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YorkieTreeTypeContext extends ParserRuleContext {
	public YORKIE_TREE(): TerminalNode { return this.getToken(SchemaParser.YORKIE_TREE, 0); }
	public LT(): TerminalNode { return this.getToken(SchemaParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(SchemaParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_yorkieTreeType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterYorkieTreeType) {
			listener.enterYorkieTreeType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitYorkieTreeType) {
			listener.exitYorkieTreeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitYorkieTreeType) {
			return visitor.visitYorkieTreeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


