grammar YorkieSchema;

// Top-level structure
document: declaration* EOF;

declaration
    : typeAliasDeclaration
    | variableDeclaration
    ;

typeAliasDeclaration
    : 'type' Identifier typeParameters? '=' type ';'
    ;

variableDeclaration
    : 'let' Identifier typeAnnotation? ('=' expression)? ';'
    ;

// Type definitions
typeAnnotation
    : ':' type
    ;

type
    : unionType
    ;

unionType
    : intersectionType ('|' intersectionType)*
    ;

intersectionType
    : arrayType ('&' arrayType)*
    ;

arrayType
    : primaryType ('[' ']')*
    ;

primaryType
    : parenthesizedType
    | primitiveType
    | objectType
    | functionType
    | yorkieType
    | typeReference
    ;

primitiveType
    : 'number'
    | 'string'
    | 'boolean'
    | 'any'
    | 'void'
    | 'null'
    | 'undefined'
    ;

objectType
    : '{' (propertySignature)* '}'
    ;

propertySignature
    : propertyName typeAnnotation ';'
    ;

propertyName
    : Identifier
    | StringLiteral
    ;

functionType
    : '(' parameterList? ')' '=>' type
    ;

parameterList
    : parameter (',' parameter)*
    ;

parameter
    : Identifier typeAnnotation?
    ;

// Yorkie specific types
yorkieType
    : 'yorkie.Object'
    | 'yorkie.Array'
    | 'yorkie.Counter'
    | 'yorkie.Text'
    | 'yorkie.Tree'
    ;

typeReference
    : Identifier typeArguments?
    ;

parenthesizedType
    : '(' type ')'
    ;

// Generics
typeParameters
    : '<' typeParameter (',' typeParameter)* '>'
    ;

typeParameter
    : Identifier ('extends' type)?
    ;

typeArguments
    : '<' type (',' type)* '>'
    ;

// Expressions (simplified for this example)
expression
    : Identifier
    | literal
    ;

literal
    : StringLiteral
    | NumberLiteral
    | BooleanLiteral
    ;

// Lexer rules
Identifier: [a-zA-Z_][a-zA-Z0-9_]*;
StringLiteral: '"' (~["\r\n])* '"';
NumberLiteral: [0-9]+('.'[0-9]+)?;
BooleanLiteral: 'true' | 'false';
WS: [ \t\r\n]+ -> skip;
