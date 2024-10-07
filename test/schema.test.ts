import { describe, it, assert } from 'vitest';
import { validate } from '../src/validator';

describe('Schema', () => {
  it('should be able to parse the valid schema', () => {
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
      `),
    );
  });
});
