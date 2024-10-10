import { EditorState } from '@codemirror/state';
import { linter, lintGutter, Diagnostic } from '@codemirror/lint';
import { basicSetup, EditorView } from 'codemirror';
import { toDiagnostics } from './validator';

const yorkieLinter = linter((view): Array<Diagnostic> => {
  const code = view.state.doc.toString();
  return toDiagnostics(code).map((data) => {
    return {
      from:
        view.state.doc.line(data.range.start.line).from +
        data.range.start.column,
      to: view.state.doc.line(data.range.end.line).from + data.range.end.column,
      message: data.message,
      severity: data.severity,
    };
  });
});

const exampleDoc = `// 🐾 Yorkie Schema Test

// Every document should start with 'Document' type.
type Document = {
  // Primitives
  created: boolean;               // Boolean
  key: string;                    // String
  seq: number;                    // Number
  theme: "light" | "dark";        // String literal with Union
  key: string;                    // Error: duplicated key(TODO)

  // Object, Array and User-defined Type
  udt1: Change;                    // User-Defined Type
  udt2: UndefinedType;             // User-Defined Type: undefined type
  arr0: Array;                     // Array
  arr1: Change[];                  // Array with []
  arr2: Array<Change>;             // Array: Type Parameter
  obj1: Object<{ key: string; }>;  // Object: Type Parameter
  obj2: { key: string; };          // Object

  yobj1: yorkie.Object<{k:number;}>;   // yorkie.Object
  yobj2: yorkie.Object;                // yorkie.Object: Error: requires a generic type
  yarr1: yorkie.Array<number>;         // yorkie.Array
  yarr2: yorkie.Array;                 // yorkie.Array: Error: requires a generic type
  ycnt: yorkie.Counter;                // Yorkie Counter
  ytree: yorkie.Tree;                  // Yorkie Tree
  ytext: yorkie.Text;                  // Yorkie Text
  ytext: yorkie.Text<{b:boolean;}>;    // Yorkie Text: Type Parameter
};`;

new EditorView({
  state: EditorState.create({
    doc: exampleDoc,
    extensions: [basicSetup, yorkieLinter, lintGutter()],
  }),
  parent: document.getElementById('editor')!,
});
