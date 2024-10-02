import { describe, it, assert } from "vitest";
import { validate } from "../src/validator";

describe("Schema", () => {
  it("should be able to parse the valid schema", () => {
    // 우리가 생각하는 Schema의 스팩은?
    // - TypeScript와 유사한 타입 정의 문법을 사용한다.
    // - Yorkie가 갖고 있는 기본 타입을 사용할 수 있다.
    //   - yorkie.JSONArray, yorkie.JSONObject
    //   - yorkie.Counter, yorkie.Text, yorkie.Tree
    // - 이외에 사용자가 정의한 타입을 사용할 수 있다.
    // - 하지만 정의하지 않은 타입을 사용할 수 없다.
    // - Yorkie가 갖고 있는 Primitive 타입을 사용할 수 있다.
    //   - null, boolean, number(integer, double), long(bigint), string, bytes(Uint8Array), Date

    assert.isTrue(
      validate(`
        type Storage {    
          todos: Todo[]
        }
        type Todo {
          title: string
          completed: boolean
        }
      `)
    );
  });
});

describe("Schema", () => {
  it("should parse a valid schema with basic types", () => {
    const schema = `
      type Storage {    
        todos: Todo[]
      }
      type Todo {
        title: string
        completed: boolean
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("should parse a schema using Yorkie's basic types with comma", () => {
    const schema = `
      type Storage {
        data: yorkie.JSONObject
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("should parse a schema using Yorkie's basic types", () => {
    const schema = `
      type Storage {
        data: yorkieJSONObject
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("should parse a schema using Yorkie's complex types with comma", () => {
    const schema = `
      type Storage {
        todos: yorkie.JSONArray
        counter: yorkie.Counter
        text: yorkie.Text
        tree: yorkie.Tree
      }
    `;
    assert.isTrue(validate(schema));
  }); // fail

  it("should parse a schema using Yorkie's complex types", () => {
    const schema = `
      type Storage {
        todos: yorkieJSONArray
        counter: yorkieCounter
        text: yorkieText
        tree: yorkieTree
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("should not parse a schema with undefined types", () => {
    const schema = `
      type Storage {
        unknownType: Hello
      }
    `;
    assert.isFalse(validate(schema));
  }); // fail

  it("should parse a schema with Yorkie's primitive types", () => {
    const schema = `
      type Storage {
        nullValue: null
        booleanValue: boolean
        numberValue: number
        longValue: long
        stringValue: string
        bytesValue: bytes
        dateValue: Date
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("should not parse a schema with invalid syntax", () => {
    const schema = `
      type Storage {
        invalidField: 
      }
    `;
    assert.isFalse(validate(schema));
  }); // fail

  it("should not parse a schema with invalid syntax2", () => {
    const schema = `
      type Storage {
        invalidField , boolean
      }
    `;
    assert.isFalse(validate(schema));
  });

  it("should not parse a schema with invalid syntax3", () => {
    const schema = `
      type Storage {    
        todos: Todo[]
      }
      type Todo {
        title: string,
        completed: boolean
      }
    `;
    assert.isFalse(validate(schema));
  }); // fail

  it("multiple type definitions", () => {
    const schema = `
      type MyTypeName {
      apple: string
      banana: number
      cookie: boolean
      dog: number[]
      string_or_number: string | number
      array_of_string_or_number: (string | number)[]
      complex: string | number | boolean[]
      array_of_complex: (string | number | boolean)[]
    }

    type AnotherMyType {
      mytypes: MyTypeName[]
    }

    type UserDetail {
      address: string
      age: number
      foo: string | number | boolean
      bar: string[]
    }

    type Root {
      name: string
      detail: UserDetail
    }
    `;
    assert.isTrue(validate(schema));
  }); // fail

  it("anonymous type definition", () => {
    const schema = `
      type Storage  {
        scientist: { name: string, age: number }
      }
    `;
    assert.isTrue(validate(schema));
  });


  it("value restriction", () => {
    const schema = `
      type Document  {
        theme: "light" | "dark"
        history: Event[]
      }
      
      type Event {
        statusCode: 200 | 400
        info: string
      }
    `;
    assert.isTrue(validate(schema));
  });
});