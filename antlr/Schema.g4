grammar Schema;

// Lexer rules
IDENTIFIER: [a-zA-Z_] [a-zA-Z0-9_]*;
NEWLINE: '\r'? '\n' -> skip;
COMMENT: ('//' | '#') ~[\r\n]* -> skip;
DIGIT: [0-9];
WHITESPACE: [ \t\n\r]+ -> skip;

// Keywords
YORKIE_OBJECT: 'yorkie.Object';
YORKIE_ARRAY: 'yorkie.Array';
YORKIE_COUNTER: 'yorkie.Counter';
YORKIE_TEXT: 'yorkie.Text';
YORKIE_TREE: 'yorkie.Tree';

// Operations and Symbols
MINUS: '-';
SEMICOLON: ';';
LPAREN: '(';
RPAREN: ')';
LCURLY: '{';
RCURLY: '}';
GT: '>';
LT: '<';
PIPE: '|';
QUESTION: '?';
EQ: '=';
COMMA: ',';
LSQUARE: '[';
RSQUARE: ']';

// Utils
DOUBLE_QUOTED_STRING: '"' (ESC | ~["\n])* '"';
SINGLE_QUOTED_STRING: '\'' (ESC | ~['\n])* '\'';
fragment ESC: '\\' [btnr\\'"];

// Top-level rule
document: definitionList EOF;

definitionList: definition (WHITESPACE* definition)*;

definition: objectTypeDefinition;

typeName: IDENTIFIER;

objectTypeDefinition
	: 'type' WHITESPACE* typeName WHITESPACE* LCURLY WHITESPACE* 
		fieldDefList? WHITESPACE* RCURLY SEMICOLON?
	;

fieldDefList
	: fieldDef ((COMMA | SEMICOLON | NEWLINE) fieldDef)*
	;

identifier: IDENTIFIER;

fieldDef: identifier QUESTION? ':' type;

type: nonUnionType (PIPE type)*;

nonUnionType: nonUnionTypeL2 (LSQUARE RSQUARE)*;

nonUnionTypeL2:
	LPAREN type RPAREN
	| objectLiteralType
	| primitiveType
	| literalType
	| yorkieType
	| typeReference;

typeReference: typeName;
objectLiteralType: LCURLY fieldDefList? RCURLY;

primitiveType:
	'string'
	| 'number'
	| 'boolean'
	| 'null'
	| 'bigint'
	| 'Uint8Array'
	| 'Date'
	;

literalType:
	booleanLiteralType
	| numberLiteralType
	| stringLiteralType;

booleanLiteralType: 'true' | 'false';

numberLiteralType: MINUS? DIGIT+ ('.' DIGIT+)?;

stringLiteralType: DOUBLE_QUOTED_STRING | SINGLE_QUOTED_STRING;

yorkieType:
	yorkieObjectType
	| yorkieArrayType
	| yorkieCounterType
	| yorkieTextType
	| yorkieTreeType;

yorkieObjectType:
	YORKIE_OBJECT LT (typeReference | objectLiteralType) GT;
yorkieArrayType:
	YORKIE_ARRAY LT (typeReference | objectLiteralType) GT;
yorkieCounterType: YORKIE_COUNTER;
yorkieTextType:
	YORKIE_TEXT LT (typeReference | objectLiteralType) GT;
yorkieTreeType: YORKIE_TREE LT GT;
