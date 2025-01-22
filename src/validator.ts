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

import {
  CharStreams,
  CommonTokenStream,
  ANTLRErrorListener,
  Recognizer,
  Token,
  CommonToken,
  RecognitionException,
} from 'antlr4ts';
import { YorkieSchemaLexer } from '../antlr/YorkieSchemaLexer';
import {
  ObjectTypeContext,
  PropertyNameContext,
  YorkieSchemaParser,
} from '../antlr/YorkieSchemaParser';
import { YorkieSchemaListener } from '../antlr/YorkieSchemaListener';
import {
  TypeAliasDeclarationContext,
  TypeReferenceContext,
} from '../antlr/YorkieSchemaParser';
import { ParseTreeWalker } from 'antlr4ts/tree';

/**
 * `TokenPosition` represents a position of a token.
 */
type TokenPosition = {
  line: number;
  column: number;
};

/**
 * `TypeSymbol` represents a type alias declaration.
 */
type TypeSymbol = {
  name: string;
} & TokenPosition;

/**
 * `TypeReference` represents a type reference in a type alias declaration.
 */
type TypeReference = TypeSymbol & {
  parent: string;
};

/**
 * `Diagnostic` represents a diagnostic message for a schema. It usually used
 * for error, warning, and info messages in CodeMirror.
 */
export type Diagnostic = {
  severity: 'error' | 'warning' | 'info';
  message: string;
  range: {
    start: { column: number; line: number };
    end: { column: number; line: number };
  };
};

export class SymbolCollector implements YorkieSchemaListener {
  private symbol: string | null = null;
  private properties: Set<string> | null = null;

  public symbolMap: Map<string, TypeSymbol> = new Map();
  public referenceMap: Map<string, TypeReference> = new Map();
  public errors: Array<{ message: string; line: number; column: number }> = [];

  enterTypeAliasDeclaration(ctx: TypeAliasDeclarationContext) {
    const typeName = ctx.Identifier().text;
    const { line, charPositionInLine } = ctx.Identifier().symbol;

    if (this.symbolMap.has(typeName)) {
      this.errors.push({
        message: `Duplicate type declaration: ${typeName}`,
        line: line,
        column: charPositionInLine,
      });
    }

    this.symbolMap.set(typeName, {
      name: typeName,
      line: line,
      column: charPositionInLine,
    });

    this.symbol = typeName;
  }

  enterObjectType(_: ObjectTypeContext) {
    this.properties = new Set();
  }

  exitObjectType(_: ObjectTypeContext) {
    this.properties = null;
  }

  enterPropertyName(ctx: PropertyNameContext) {
    const typeName = ctx.Identifier()!.text;
    const { line, charPositionInLine } = ctx.Identifier()!.symbol;

    if (this.properties?.has(typeName)) {
      this.errors.push({
        message: `Duplicate property name: ${typeName}`,
        line: line,
        column: charPositionInLine,
      });
    }

    this.properties?.add(typeName);
  }

  enterPropertyTypeReference(ctx: TypeReferenceContext) {
    const typeName = ctx.Identifier().text;
    console.log(typeName);
  }

  enterTypeReference(ctx: TypeReferenceContext) {
    const typeName = ctx.Identifier().text;
    const { line, charPositionInLine } = ctx.Identifier().symbol;

    this.referenceMap.set(typeName, {
      name: typeName,
      parent: this.symbol!,
      line: line,
      column: charPositionInLine,
    });
  }
}

class LexerErrorListener implements ANTLRErrorListener<number> {
  constructor(private errorList: Diagnostic[]) {}

  syntaxError<T extends number>(
    _recognizer: Recognizer<T, any>,
    _offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    const error: Diagnostic = {
      severity: 'error',
      message: msg,
      range: {
        start: { column: charPositionInLine, line },
        end: { column: charPositionInLine + 1, line },
      },
    };

    this.errorList.push(error);
  }
}

class ParserErrorListener implements ANTLRErrorListener<CommonToken> {
  constructor(private errorList: Diagnostic[]) {}

  syntaxError<T extends Token>(
    _recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    _e: RecognitionException | undefined,
  ): void {
    let length = 1;
    if (
      offendingSymbol &&
      offendingSymbol.stopIndex >= offendingSymbol.startIndex
    ) {
      length = offendingSymbol.stopIndex - offendingSymbol.startIndex + 1;
    }

    const error: Diagnostic = {
      severity: 'error',
      message: msg,
      range: {
        start: { column: charPositionInLine, line },
        end: { column: charPositionInLine + length, line },
      },
    };

    this.errorList.push(error);
  }
}

/**
 * `validate` validates the given schema and returns the list of diagnostics.
 */
export function validate(schema: string): { errors: Array<Diagnostic> } {
  const diagnostics: Array<Diagnostic> = [];

  const stream = CharStreams.fromString(schema);
  const lexer = new YorkieSchemaLexer(stream);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new LexerErrorListener(diagnostics));

  const tokens = new CommonTokenStream(lexer);
  const parser = new YorkieSchemaParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ParserErrorListener(diagnostics));

  const tree = parser.document();
  const collector = new SymbolCollector();
  ParseTreeWalker.DEFAULT.walk(collector as any, tree);

  // TODO(hackerwins): This is a naive implementation and performance can be improved.
  for (const [, ref] of collector.referenceMap) {
    if (!collector.symbolMap.has(ref.name)) {
      collector.errors.push({
        message: `Type '${ref.name}' is not defined.`,
        line: ref.line,
        column: ref.column,
      });
    }
  }

  for (const [, symbol] of collector.symbolMap) {
    const visited = new Set();
    let current: string | undefined = symbol.name;
    while (current) {
      // 02. Check if there is a circular reference.
      if (visited.has(current)) {
        collector.errors.push({
          message: `Circular reference detected: ${current} -> ${symbol.name}`,
          line: symbol.line,
          column: symbol.column,
        });
        break;
      }

      visited.add(current);
      current = collector.referenceMap.get(current)?.parent;
    }

    // 03. Check if there is a type that is not in the document.
    if (!visited.has('Document')) {
      collector.errors.push({
        message: `Type '${symbol.name}' is not in the document.`,
        line: symbol.line,
        column: symbol.column,
      });
    }
  }

  const semanticErrors: Array<Diagnostic> = collector.errors.map((error) => {
    return {
      severity: 'error',
      message: error.message,
      range: {
        start: { column: error.column, line: error.line },
        end: { column: error.column + 1, line: error.line },
      },
    };
  });

  const errors = [...diagnostics, ...semanticErrors];

  return {
    errors,
  };
}
