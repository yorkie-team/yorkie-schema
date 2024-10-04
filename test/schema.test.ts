import { describe, it, assert } from "vitest";
import { validate } from "../src/validator";

describe("Use Grammar Similar to TypeScript", () => {
  it("value restriction with literal types", () => {
    const schema = `
      type Document {
        theme: "light" | "dark";
        history: Event[];
      }
      
      type Event {
        statusCode: 200 | 400;
        info: string;
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("array with anonymous type definition", () => {
    const schema = `
      type Document {
        objectArray: { name: string; age: number; }[];
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("union types", () => {
    const schema = `
      type Document  {
        title: string;
        author: string | null;
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("invalid syntax: empty type definition", () => {
    const schema = `
      type Document {
        invalidField: 
      }
    `;
    assert.isFalse(validate(schema));
  });

  it("invalid syntax: no semicolon", () => {
    const schema = `
      type Document {
        invalidField: number;
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("anonymous type definition", () => {
    const schema = `
      type Document {
        scientist: { 
          name: string; 
          age: number;
        };
      };
    `;
    assert.isTrue(validate(schema));
  });

  it("optional properties", () => {
    const schema = `
      type Document  {
        title: string;
        version?: number;
        author?: string;
      };
    `;
    assert.isTrue(validate(schema));
  });
});

describe("Yorkie Primitive Types", () => {
  it("should parse a schema with Yorkie's primitive types", () => {
    const schema = `
      type Document {
        field1: null;
        field2: boolean;
        field3: number;
        field4: bigint;
        field5: Uint8Array;
        field6: Date;
        field7: string;
      }
    `;
    assert.isTrue(validate(schema));
  });  
});

describe("Yorkie Element Level Basic Types", () => {
  it("should parse a schema using Yorkie's complex types", () => {
    const schema = `
      type Document {
        object: yorkie.Object;
        array: yorkie.Array;
        counter: yorkie.Counter;
        text: yorkie.Text;
        tree: yorkie.Tree;
      };
    `;
    assert.isTrue(validate(schema));
  });
});

describe("User Defined Types", () => {
  it("", () => {
    const schema = `
      type Document {
        todos: Todo[];
      }

      type Todo {
        title: string;
        completed: boolean;
      }
    `;
    assert.isTrue(validate(schema));
  });

  it("multiple user defined types", () => {
    const schema = `
      type Document {
        name: string;
        detail: UserDetail;
        mytypes: MyTypeName[];
      };

      type MyTypeName {
        apple: string;
        banana: number;
        cookie: boolean;
        dog: number[];
        string_or_number: string | number;  
        array_of_string_or_number: (string | number)[];
        complex: string | number | boolean[];
        array_of_complex: (string | number | boolean)[];  
      };

      type UserDetail {
        address: string;
        age: number;
        foo: string | number | boolean;
        bar: string[];
      };
    `;
    assert.isTrue(validate(schema));
  });
});

describe("Exclude UnDefined Types", () => {
  it("should not parse a schema with undefined types", () => {
    const schema = `
      type Document {
        unknownType: Hello;
      };
    `;
    assert.isFalse(validate(schema));
  });

});