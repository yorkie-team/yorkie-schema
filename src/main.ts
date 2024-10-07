import { EditorState } from '@codemirror/state';
import { linter, lintGutter, Diagnostic } from '@codemirror/lint';
import { basicSetup, EditorView } from 'codemirror';
import { getDiagnostics } from './validator';

const yorkieLinter = linter((view) => {
  const code = view.state.doc.toString();
  const diagnostics: Diagnostic[] = getDiagnostics(code).map((data) => {
    return {
      from:
        view.state.doc.line(data.range.start.line).from +
        data.range.start.column,
      to: view.state.doc.line(data.range.end.line).from + data.range.end.column,
      message: data.message,
      severity: data.severity,
    };
  });
  return diagnostics;
});

new EditorView({
  state: EditorState.create({
    doc: `// 🐾 Yorkie Schema Example

// This is the root of your document
// Every schema must define a Document type
type Document = {
  // theme: "light" | "dark";
  history: Event[];
  text: yorkie.Text;
};

type Event = {
  statusCode: 200 | 400;
  info: string;
};
      `,
    extensions: [basicSetup, yorkieLinter, lintGutter()],
  }),
  parent: document.getElementById('editor')!,
});
