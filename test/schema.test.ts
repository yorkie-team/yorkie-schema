import { describe, it, expect } from 'vitest';
import { validate } from '../src/validator';

describe('Schema:TypeScript', () => {
  it('should validate value restriction with literal types', () => {
    const schema = `
      type Document = {
        theme: "light" | "dark";
        history: Event[];
      };
      
      type Event = {
        statusCode: 200 | 400;
        info: string;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should validate array with anonymous type definition', () => {
    const schema = `
      type Document = {
        objectArray: { name: string; age: number; }[];
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should validate union types', () => {
    const schema = `
      type Document = {
        title: string;
        author: string | null;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should detect invalid syntax: empty type definition', () => {
    const schema = `
      type Document = {
        invalidField: 
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it('should detect invalid syntax: no semicolon', () => {
    const schema = `
      type Document = {
        invalidField: number
      }
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it('should validate anonymous type definition', () => {
    const schema = `
      type Document = {
        scientist: { 
          name: string; 
          age: number;
        };
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should validate optional properties', () => {
    const schema = `
      type Document = {
        title: string;
        version?: number;
        author?: string;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should detect unsupported types in TypeScript', () => {
    const schema = `
      type Document = {
        title: float;
        version?: longlong;
        author?: long;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it('should validate schema with comments', () => {
    const schema = `
      // This is comment.
      type Document = {
        field: string;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });
});

describe('Schema:Yorkie', () => {
  it('should parse a schema with Yorkie Primitives', () => {
    const schema = `
      type Document = {
        field1: null;
        field2: boolean;
        field3: number;
        field4: any;
        field7: string;
        field8: undefined;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should parse a schema with Yorkie Types', () => {
    const schema = `
      type Document = {
        counter: yorkie.Counter;
        tree: yorkie.Tree;
        text: yorkie.Text;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should validate Yorkie types with user-defined attributes', () => {
    const schema = `
      type Document = {
        text1: yorkie.Text<{}>;
        text2: yorkie.Text<{bold: boolean;}>;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should detect incorrect usage of Yorkie type', () => {
    const schema = `
      type Document = {
        object: yorkie.Object;
        array: yorkie.Array;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it(`should parse a schema using Yorkie's complex types`, () => {
    const schema = `
      type Todo = {
        title: string;
        completed: boolean;
      };
      type Document = {
        object: yorkie.Object<{}>;
        array: yorkie.Array<string>;
        array2: yorkie.Array<Array<string>>;
        array3: yorkie.Array<Todo>;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });
});

describe('Schema:User-Defined', () => {
  it('should support type[] syntax for user-defined types', () => {
    const schema = `
      type Document = {
        todos: Todo[];
      };
      type Todo = {
        title: string;
        completed: boolean;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should support Array<T> syntax for user-defined types', () => {
    const schema = `
      type Document = {
        todos: Array<Todo>;
      };
      type Todo = {
        title: string;
        completed: boolean;
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });

  it('should validate multiple user-defined types', () => {
    const schema = `
      type Document = {
        name: string;
        detail: UserDetail;
        mytypes: MyTypeName[];
      };
      type MyTypeName = {
        apple: string;
        banana: number;
        cookie: boolean;
        dog: number[];
        stringOrNumber: string | number;  
        arrayOfStringOrNumber: (string | number)[];
        complex: string | number | boolean[];
        arrayOfComplex: (string | number | boolean)[];  
      };
      type UserDetail = {
        address: string;
        age: number;
        foo: string | number | boolean;
        bar: string[];
      };
    `;
    expect(validate(schema).errors.length).toBe(0);
  });
});

describe('Schema:Semantic', () => {
  it('should not parse a schema with undefined types', () => {
    const schema = `
      type Document = {
        unknownType: Hello;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it('should restrict the use of reserved words', () => {
    const schema = `
      type string = {
        field1: string;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it.skip('should restrict unused type definition', () => {
    const schema = `
      type UserType = {
        field1: string;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });

  it.skip('should detect type cycle', () => {
    const schema = `
      type Hello = {
        field1: string;
        field2: World;
      };
      
      type World = {
        field1: string;
        field2: Hello;
      };
    `;
    expect(validate(schema).errors.length).toBeGreaterThan(0);
  });
});
