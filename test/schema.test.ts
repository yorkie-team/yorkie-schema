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

  it.skip("invalid syntax: empty type definition", () => {
    const schema = `
      type Document {
        invalidField: 
      }
    `;
    // TODO(sigmaith): If the type is not defined, an error should occur.
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
  
  it.skip("Type not supported in TypeScript", () => {
    const schema = `
      type Document  {
        title: float;
        version?: longlong;
        author?: long;
      };
    `;
    // TODO(sigmaith): Type not supported by TS is not available.
    assert.isFalse(validate(schema));
  });

  it("annotation", () => {
    const schema = `
      type Document {
        field: string;
      }
      // comment1
      # comment2
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
  it("Yorkie types correct example: Counter, Tree, Text", () => {
    const schema = `
      type Document {
        counter: yorkie.Counter;
        tree: yorkie.Tree;
        text: yorkie.Text;
      };
    `;
    assert.isTrue(validate(schema));
  });

  it.skip("Yorkie types correct example: User Defined Text Type With Attributes", () => {
    const schema = `
      type Document {
        text: yorkie.Text<{}>;
        text: yorkie.Text<{bold: boolean}>;
      };
    `;
    // TODO(sigmaith): Users must be able to define the properties of the Yorkie.Text data structure themselves.
    assert.isTrue(validate(schema));
  });
  
  it.skip("should parse a schema using Yorkie types", () => {
    const schema = `
      type Document {
        object: yorkie.Object;
        array: yorkie.Array;
      };
    `;
    // TODO(sigmaith): Limit the user to define the Yorkie.Object, Yorkie.Array correctly.
    assert.isFalse(validate(schema));
  });

  it.skip("should parse a schema using Yorkie's complex types", () => {
    const schema = `
      type Todo {
        title: string;
        completed: boolean;
      }
      type Document {
        object: yorkie.Object<{}>;
        array: yorkie.Array<string>;
        array2: yorkie.Array<Array<string>>;
        array3: yorkie.Array<Todo>;
      };
    `;
    // TODO(sigmaith): Limit the user to define the Yorkie.Object, Yorkie.Array correctly.
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

  it.skip("", () => {
    const schema = `
      type Document {
        todos: Array<Todo>;
      }

      type Todo {
        title: string;
        completed: boolean;
      }
    `;
    assert.isTrue(validate(schema));
    // Todo(sigmaith): Array type should be supported.
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
  it.skip("should not parse a schema with undefined types", () => {
    const schema = `
      type Document {
        unknownType: Hello;
      };
    `;
    // TODO(sigmaith): Limit the undefined type to be unavailable.
    assert.isFalse(validate(schema));
  })
});

describe("Exception Handling", () => {
  it("Restricting the use of reserved words", () => {
      const schema =  `
        type string {
          field1: string;
        }
      `;
      assert.isFalse(validate(schema));
  })

  it.skip("Restricting unused type definition", () => {
    const schema =  `
      type UserType {
        field1: string;
      }
    `;
    // TODO(sigmaith): Inform that the defined type has not been used.
    assert.isFalse(validate(schema));
  })

  it.skip("Type Cycle", () => {
    const schema = `
      type Hello {
        field1: string;
        field2: World;
      }
      
      type World {
        field1: string;
        field2: Hello;
      }
    `;
    // TODO(sigmaith): Restrict Type Cycle.
    assert.isFalse(validate(schema));
  })
}) 