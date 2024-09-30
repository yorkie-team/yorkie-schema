// Generated from antlr/Schema.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SchemaLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "IDENTIFIER", "WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'type'", "'{'", "'}'", "':'", "'[]'", "'('", "')'", "'|'", 
		"'string'", "'number'", "'boolean'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "IDENTIFIER", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SchemaLexer._LITERAL_NAMES, SchemaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SchemaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SchemaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Schema.g4"; }

	// @Override
	public get ruleNames(): string[] { return SchemaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SchemaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SchemaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SchemaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0FU\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x07\rJ\n\r\f\r\x0E\rM\v\r\x03\x0E\x06\x0EP" +
		"\n\x0E\r\x0E\x0E\x0EQ\x03\x0E\x03\x0E\x02\x02\x02\x0F\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x03\x02\x05\x05\x02" +
		"C\\aac|\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02V\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x03\x1D\x03\x02\x02\x02\x05\"\x03\x02\x02\x02\x07$\x03\x02\x02\x02" +
		"\t&\x03\x02\x02\x02\v(\x03\x02\x02\x02\r+\x03\x02\x02\x02\x0F-\x03\x02" +
		"\x02\x02\x11/\x03\x02\x02\x02\x131\x03\x02\x02\x02\x158\x03\x02\x02\x02" +
		"\x17?\x03\x02\x02\x02\x19G\x03\x02\x02\x02\x1BO\x03\x02\x02\x02\x1D\x1E" +
		"\x07v\x02\x02\x1E\x1F\x07{\x02\x02\x1F \x07r\x02\x02 !\x07g\x02\x02!\x04" +
		"\x03\x02\x02\x02\"#\x07}\x02\x02#\x06\x03\x02\x02\x02$%\x07\x7F\x02\x02" +
		"%\b\x03\x02\x02\x02&\'\x07<\x02\x02\'\n\x03\x02\x02\x02()\x07]\x02\x02" +
		")*\x07_\x02\x02*\f\x03\x02\x02\x02+,\x07*\x02\x02,\x0E\x03\x02\x02\x02" +
		"-.\x07+\x02\x02.\x10\x03\x02\x02\x02/0\x07~\x02\x020\x12\x03\x02\x02\x02" +
		"12\x07u\x02\x0223\x07v\x02\x0234\x07t\x02\x0245\x07k\x02\x0256\x07p\x02" +
		"\x0267\x07i\x02\x027\x14\x03\x02\x02\x0289\x07p\x02\x029:\x07w\x02\x02" +
		":;\x07o\x02\x02;<\x07d\x02\x02<=\x07g\x02\x02=>\x07t\x02\x02>\x16\x03" +
		"\x02\x02\x02?@\x07d\x02\x02@A\x07q\x02\x02AB\x07q\x02\x02BC\x07n\x02\x02" +
		"CD\x07g\x02\x02DE\x07c\x02\x02EF\x07p\x02\x02F\x18\x03\x02\x02\x02GK\t" +
		"\x02\x02\x02HJ\t\x03\x02\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02L\x1A\x03\x02\x02\x02MK\x03\x02\x02\x02" +
		"NP\t\x04\x02\x02ON\x03\x02\x02\x02PQ\x03\x02\x02\x02QO\x03\x02\x02\x02" +
		"QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\b\x0E\x02\x02T\x1C\x03\x02\x02" +
		"\x02\x05\x02KQ\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SchemaLexer.__ATN) {
			SchemaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SchemaLexer._serializedATN));
		}

		return SchemaLexer.__ATN;
	}

}

