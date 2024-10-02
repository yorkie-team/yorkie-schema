grammar Schema;

// Lexer rules
IDENTIFIER: [a-zA-Z_] [a-zA-Z0-9_]*;
WHITESPACE: [ \t\n\r]+ -> skip;
COMMENT: ('//' | '#') ~[\r\n]* -> skip;
DIGIT: [0-9];

// Keywords
YORKIE_JSON_ARRAY: 'yorkie.JSONArray';
YORKIE_JSON_OBJECT: 'yorkie.JSONObject';
YORKIE_COUNTER: 'yorkie.Counter';
YORKIE_TEXT: 'yorkie.Text';
YORKIE_TREE: 'yorkie.Tree';

// Operations and Symbols
MINUS: '-';

// Entry point of the grammar
start: typeDefinitions EOF;
typeDefinitions: typeDefinition (WHITESPACE* typeDefinitions)?;
typeDefinition: 'type' IDENTIFIER '{' fieldList '}';
fieldList: field (WHITESPACE* fieldList)?;
field: IDENTIFIER WHITESPACE* ':' WHITESPACE* fieldType;
fieldType: typeExpression arraySuffix*;
typeExpression: unionType | simpleType;
simpleType: primitiveType | literalType | IDENTIFIER;
arraySuffix: '[]';
unionType:
	'(' WHITESPACE* unionTypeInner WHITESPACE* ')'
	| unionTypeInner;
unionTypeInner:
	simpleType (WHITESPACE* '|' WHITESPACE* simpleType)*;
primitiveType:
	'string'
	| 'number'
	| 'boolean'
	| 'null'
	| YORKIE_JSON_ARRAY
	| YORKIE_JSON_OBJECT
	| YORKIE_COUNTER
	| YORKIE_TEXT
	| YORKIE_TREE;
literalType:
	booleanLiteralType
	| numberLiteralType
	| stringLiteralType;
booleanLiteralType: 'true' | 'false';
numberLiteralType: MINUS? DIGIT+ ('.' DIGIT+)?;
stringLiteralType: DOUBLE_QUOTED_STRING | SINGLE_QUOTED_STRING;

DOUBLE_QUOTED_STRING: '"' (ESC | ~["\n])* '"';

SINGLE_QUOTED_STRING: '\'' (ESC | ~['\n])* '\'';
fragment ESC: '\\' [btnr\\'"];