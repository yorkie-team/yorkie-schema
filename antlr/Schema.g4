grammar Schema;

// Entry point of the grammar
start: typeDefinitions EOF;
typeDefinitions
  : typeDefinition (WHITESPACE* typeDefinitions)?
  ;
typeDefinition
  : 'type' IDENTIFIER '{' fieldList '}'
  ;
fieldList
  : field (WHITESPACE* fieldList)?
  ;
field
  : IDENTIFIER WHITESPACE* ':' WHITESPACE* fieldType
  ;
fieldType
  : typeExpression arraySuffix*
  ;
typeExpression
  : unionType
  | simpleType
  ;
simpleType
  : primitiveType
  | IDENTIFIER
  ;
arraySuffix
  : '[]'
  ;
unionType
  : '(' WHITESPACE* unionTypeInner WHITESPACE* ')'
  | unionTypeInner
  ;
unionTypeInner
  : simpleType (WHITESPACE* '|' WHITESPACE* simpleType)*
  ;
primitiveType
  : ('string' | 'number' | 'boolean')
  ;
IDENTIFIER
  : [a-zA-Z_] [a-zA-Z0-9_]*
  ;
WHITESPACE
  : [ \t\n\r]+ -> skip
  ;