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
	public static readonly IDENTIFIER = 12;
	public static readonly WHITESPACE = 13;
	public static readonly RULE_start = 0;
	public static readonly RULE_typeDefinitions = 1;
	public static readonly RULE_typeDefinition = 2;
	public static readonly RULE_fieldList = 3;
	public static readonly RULE_field = 4;
	public static readonly RULE_fieldType = 5;
	public static readonly RULE_typeExpression = 6;
	public static readonly RULE_simpleType = 7;
	public static readonly RULE_arraySuffix = 8;
	public static readonly RULE_unionType = 9;
	public static readonly RULE_unionTypeInner = 10;
	public static readonly RULE_primitiveType = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "typeDefinitions", "typeDefinition", "fieldList", "field", "fieldType", 
		"typeExpression", "simpleType", "arraySuffix", "unionType", "unionTypeInner", 
		"primitiveType",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'type'", "'{'", "'}'", "':'", "'[]'", "'('", "')'", "'|'", 
		"'string'", "'number'", "'boolean'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "WHITESPACE",
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
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SchemaParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.typeDefinitions();
			this.state = 25;
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
	public typeDefinitions(): TypeDefinitionsContext {
		let _localctx: TypeDefinitionsContext = new TypeDefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SchemaParser.RULE_typeDefinitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.typeDefinition();
			this.state = 35;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.T__0 || _la === SchemaParser.WHITESPACE) {
				{
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SchemaParser.WHITESPACE) {
					{
					{
					this.state = 28;
					this.match(SchemaParser.WHITESPACE);
					}
					}
					this.state = 33;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 34;
				this.typeDefinitions();
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
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SchemaParser.RULE_typeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(SchemaParser.T__0);
			this.state = 38;
			this.match(SchemaParser.IDENTIFIER);
			this.state = 39;
			this.match(SchemaParser.T__1);
			this.state = 40;
			this.fieldList();
			this.state = 41;
			this.match(SchemaParser.T__2);
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
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SchemaParser.RULE_fieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.field();
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SchemaParser.IDENTIFIER || _la === SchemaParser.WHITESPACE) {
				{
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SchemaParser.WHITESPACE) {
					{
					{
					this.state = 44;
					this.match(SchemaParser.WHITESPACE);
					}
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 50;
				this.fieldList();
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SchemaParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(SchemaParser.IDENTIFIER);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 54;
				this.match(SchemaParser.WHITESPACE);
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			this.match(SchemaParser.T__3);
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.WHITESPACE) {
				{
				{
				this.state = 61;
				this.match(SchemaParser.WHITESPACE);
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 67;
			this.fieldType();
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
	public fieldType(): FieldTypeContext {
		let _localctx: FieldTypeContext = new FieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SchemaParser.RULE_fieldType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.typeExpression();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === SchemaParser.T__4) {
				{
				{
				this.state = 70;
				this.arraySuffix();
				}
				}
				this.state = 75;
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
	public typeExpression(): TypeExpressionContext {
		let _localctx: TypeExpressionContext = new TypeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SchemaParser.RULE_typeExpression);
		try {
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 76;
				this.unionType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this.simpleType();
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
	public simpleType(): SimpleTypeContext {
		let _localctx: SimpleTypeContext = new SimpleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SchemaParser.RULE_simpleType);
		try {
			this.state = 82;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.T__8:
			case SchemaParser.T__9:
			case SchemaParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.primitiveType();
				}
				break;
			case SchemaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 81;
				this.match(SchemaParser.IDENTIFIER);
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
	public arraySuffix(): ArraySuffixContext {
		let _localctx: ArraySuffixContext = new ArraySuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SchemaParser.RULE_arraySuffix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(SchemaParser.T__4);
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
		this.enterRule(_localctx, 18, SchemaParser.RULE_unionType);
		let _la: number;
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SchemaParser.T__5:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.match(SchemaParser.T__5);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SchemaParser.WHITESPACE) {
					{
					{
					this.state = 87;
					this.match(SchemaParser.WHITESPACE);
					}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 93;
				this.unionTypeInner();
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === SchemaParser.WHITESPACE) {
					{
					{
					this.state = 94;
					this.match(SchemaParser.WHITESPACE);
					}
					}
					this.state = 99;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 100;
				this.match(SchemaParser.T__6);
				}
				break;
			case SchemaParser.T__8:
			case SchemaParser.T__9:
			case SchemaParser.T__10:
			case SchemaParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.unionTypeInner();
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
	public unionTypeInner(): UnionTypeInnerContext {
		let _localctx: UnionTypeInnerContext = new UnionTypeInnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SchemaParser.RULE_unionTypeInner);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.simpleType();
			this.state = 122;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 109;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SchemaParser.WHITESPACE) {
						{
						{
						this.state = 106;
						this.match(SchemaParser.WHITESPACE);
						}
						}
						this.state = 111;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 112;
					this.match(SchemaParser.T__7);
					this.state = 116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === SchemaParser.WHITESPACE) {
						{
						{
						this.state = 113;
						this.match(SchemaParser.WHITESPACE);
						}
						}
						this.state = 118;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 119;
					this.simpleType();
					}
					}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public primitiveType(): PrimitiveTypeContext {
		let _localctx: PrimitiveTypeContext = new PrimitiveTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SchemaParser.RULE_primitiveType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SchemaParser.T__8) | (1 << SchemaParser.T__9) | (1 << SchemaParser.T__10))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0F\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03 \n\x03\f\x03\x0E\x03#\v\x03" +
		"\x03\x03\x05\x03&\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x07\x050\n\x05\f\x05\x0E\x053\v\x05\x03\x05\x05\x056" +
		"\n\x05\x03\x06\x03\x06\x07\x06:\n\x06\f\x06\x0E\x06=\v\x06\x03\x06\x03" +
		"\x06\x07\x06A\n\x06\f\x06\x0E\x06D\v\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x07\x07J\n\x07\f\x07\x0E\x07M\v\x07\x03\b\x03\b\x05\bQ\n\b\x03\t\x03" +
		"\t\x05\tU\n\t\x03\n\x03\n\x03\v\x03\v\x07\v[\n\v\f\v\x0E\v^\v\v\x03\v" +
		"\x03\v\x07\vb\n\v\f\v\x0E\ve\v\v\x03\v\x03\v\x03\v\x05\vj\n\v\x03\f\x03" +
		"\f\x07\fn\n\f\f\f\x0E\fq\v\f\x03\f\x03\f\x07\fu\n\f\f\f\x0E\fx\v\f\x03" +
		"\f\x07\f{\n\f\f\f\x0E\f~\v\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x02\x03\x03\x02\v\r\x02\x84\x02\x1A\x03\x02\x02\x02\x04\x1D" +
		"\x03\x02\x02\x02\x06\'\x03\x02\x02\x02\b-\x03\x02\x02\x02\n7\x03\x02\x02" +
		"\x02\fG\x03\x02\x02\x02\x0EP\x03\x02\x02\x02\x10T\x03\x02\x02\x02\x12" +
		"V\x03\x02\x02\x02\x14i\x03\x02\x02\x02\x16k\x03\x02\x02\x02\x18\x7F\x03" +
		"\x02\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x07\x02\x02\x03\x1C\x03\x03" +
		"\x02\x02\x02\x1D%\x05\x06\x04\x02\x1E \x07\x0F\x02\x02\x1F\x1E\x03\x02" +
		"\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"$" +
		"\x03\x02\x02\x02#!\x03\x02\x02\x02$&\x05\x04\x03\x02%!\x03\x02\x02\x02" +
		"%&\x03\x02\x02\x02&\x05\x03\x02\x02\x02\'(\x07\x03\x02\x02()\x07\x0E\x02" +
		"\x02)*\x07\x04\x02\x02*+\x05\b\x05\x02+,\x07\x05\x02\x02,\x07\x03\x02" +
		"\x02\x02-5\x05\n\x06\x02.0\x07\x0F\x02\x02/.\x03\x02\x02\x0203\x03\x02" +
		"\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x0224\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0246\x05\b\x05\x0251\x03\x02\x02\x0256\x03\x02\x02\x026\t\x03\x02" +
		"\x02\x027;\x07\x0E\x02\x028:\x07\x0F\x02\x0298\x03\x02\x02\x02:=\x03\x02" +
		"\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<>\x03\x02\x02\x02=;\x03\x02" +
		"\x02\x02>B\x07\x06\x02\x02?A\x07\x0F\x02\x02@?\x03\x02\x02\x02AD\x03\x02" +
		"\x02\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02EF\x05\f\x07\x02F\v\x03\x02\x02\x02GK\x05\x0E\b\x02HJ\x05\x12" +
		"\n\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02" +
		"\x02\x02L\r\x03\x02\x02\x02MK\x03\x02\x02\x02NQ\x05\x14\v\x02OQ\x05\x10" +
		"\t\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02Q\x0F\x03\x02\x02\x02RU\x05" +
		"\x18\r\x02SU\x07\x0E\x02\x02TR\x03\x02\x02\x02TS\x03\x02\x02\x02U\x11" +
		"\x03\x02\x02\x02VW\x07\x07\x02\x02W\x13\x03\x02\x02\x02X\\\x07\b\x02\x02" +
		"Y[\x07\x0F\x02\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02" +
		"\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02\x02_c\x05\x16" +
		"\f\x02`b\x07\x0F\x02\x02a`\x03\x02\x02\x02be\x03\x02\x02\x02ca\x03\x02" +
		"\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02\x02ec\x03\x02\x02\x02fg\x07\t" +
		"\x02\x02gj\x03\x02\x02\x02hj\x05\x16\f\x02iX\x03\x02\x02\x02ih\x03\x02" +
		"\x02\x02j\x15\x03\x02\x02\x02k|\x05\x10\t\x02ln\x07\x0F\x02\x02ml\x03" +
		"\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02pr\x03" +
		"\x02\x02\x02qo\x03\x02\x02\x02rv\x07\n\x02\x02su\x07\x0F\x02\x02ts\x03" +
		"\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03" +
		"\x02\x02\x02xv\x03\x02\x02\x02y{\x05\x10\t\x02zo\x03\x02\x02\x02{~\x03" +
		"\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x17\x03\x02\x02\x02" +
		"~|\x03\x02\x02\x02\x7F\x80\t\x02\x02\x02\x80\x19\x03\x02\x02\x02\x11!" +
		"%15;BKPT\\ciov|";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SchemaParser.__ATN) {
			SchemaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SchemaParser._serializedATN));
		}

		return SchemaParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public typeDefinitions(): TypeDefinitionsContext {
		return this.getRuleContext(0, TypeDefinitionsContext);
	}
	public EOF(): TerminalNode { return this.getToken(SchemaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_start; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionsContext extends ParserRuleContext {
	public typeDefinition(): TypeDefinitionContext {
		return this.getRuleContext(0, TypeDefinitionContext);
	}
	public typeDefinitions(): TypeDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionsContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_typeDefinitions; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterTypeDefinitions) {
			listener.enterTypeDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitTypeDefinitions) {
			listener.exitTypeDefinitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitTypeDefinitions) {
			return visitor.visitTypeDefinitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SchemaParser.IDENTIFIER, 0); }
	public fieldList(): FieldListContext {
		return this.getRuleContext(0, FieldListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SchemaParser.IDENTIFIER, 0); }
	public fieldType(): FieldTypeContext {
		return this.getRuleContext(0, FieldTypeContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_field; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldTypeContext extends ParserRuleContext {
	public typeExpression(): TypeExpressionContext {
		return this.getRuleContext(0, TypeExpressionContext);
	}
	public arraySuffix(): ArraySuffixContext[];
	public arraySuffix(i: number): ArraySuffixContext;
	public arraySuffix(i?: number): ArraySuffixContext | ArraySuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArraySuffixContext);
		} else {
			return this.getRuleContext(i, ArraySuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_fieldType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterFieldType) {
			listener.enterFieldType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitFieldType) {
			listener.exitFieldType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitFieldType) {
			return visitor.visitFieldType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExpressionContext extends ParserRuleContext {
	public unionType(): UnionTypeContext | undefined {
		return this.tryGetRuleContext(0, UnionTypeContext);
	}
	public simpleType(): SimpleTypeContext | undefined {
		return this.tryGetRuleContext(0, SimpleTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_typeExpression; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterTypeExpression) {
			listener.enterTypeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitTypeExpression) {
			listener.exitTypeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitTypeExpression) {
			return visitor.visitTypeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SimpleTypeContext extends ParserRuleContext {
	public primitiveType(): PrimitiveTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveTypeContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SchemaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_simpleType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterSimpleType) {
			listener.enterSimpleType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitSimpleType) {
			listener.exitSimpleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitSimpleType) {
			return visitor.visitSimpleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArraySuffixContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SchemaParser.RULE_arraySuffix; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterArraySuffix) {
			listener.enterArraySuffix(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitArraySuffix) {
			listener.exitArraySuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitArraySuffix) {
			return visitor.visitArraySuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeContext extends ParserRuleContext {
	public unionTypeInner(): UnionTypeInnerContext {
		return this.getRuleContext(0, UnionTypeInnerContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_unionType; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterUnionType) {
			listener.enterUnionType(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitUnionType) {
			listener.exitUnionType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitUnionType) {
			return visitor.visitUnionType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeInnerContext extends ParserRuleContext {
	public simpleType(): SimpleTypeContext[];
	public simpleType(i: number): SimpleTypeContext;
	public simpleType(i?: number): SimpleTypeContext | SimpleTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleTypeContext);
		} else {
			return this.getRuleContext(i, SimpleTypeContext);
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
	public get ruleIndex(): number { return SchemaParser.RULE_unionTypeInner; }
	// @Override
	public enterRule(listener: SchemaListener): void {
		if (listener.enterUnionTypeInner) {
			listener.enterUnionTypeInner(this);
		}
	}
	// @Override
	public exitRule(listener: SchemaListener): void {
		if (listener.exitUnionTypeInner) {
			listener.exitUnionTypeInner(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SchemaVisitor<Result>): Result {
		if (visitor.visitUnionTypeInner) {
			return visitor.visitUnionTypeInner(this);
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


