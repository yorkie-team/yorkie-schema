/*
 * Copyright 2025 The Yorkie Authors. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    | 'Array' typeArguments
    ;

primaryType
    : parenthesizedType
    | primitiveType
    | objectType
    | yorkieType
    | typeReference
    | literal
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
    : propertyName '?'? typeAnnotation ';'
    ;

propertyName
    : Identifier
    | StringLiteral
    ;

// Yorkie specific types
yorkieType
    : 'yorkie.Object' typeArguments
    | 'yorkie.Array' typeArguments
    | 'yorkie.Counter' typeArguments?
    | 'yorkie.Text' typeArguments?
    | 'yorkie.Tree' typeArguments?
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

// Expressions
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
SingleLineComment: '//' ~[\r\n]* -> channel(HIDDEN);
MultiLineComment: '/*' .*? '*/' -> channel(HIDDEN);
WS: [ \t\r\n]+ -> skip;
