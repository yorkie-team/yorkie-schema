import { describe, it } from 'vitest';
import { validate } from '../src/validator';

describe('Schema', () => {
  it('should be able to parse the valid schema', () => {
    const schema = `
      type Storage {    
        todos: Todo[]    
      }    

      type Todo {    
        title: string    
        completed: boolean    
      }
    `;

    validate(schema);
  });
});