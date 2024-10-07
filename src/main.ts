import { EditorState } from "@codemirror/state";
import { linter, lintGutter, Diagnostic } from "@codemirror/lint";
import { EditorView } from "@codemirror/view";

const yorkieLinter = linter((view) => {
  const diagnostics: Diagnostic[] = [];
  const code = view.state.doc.toString();

  // Sample linter
  const forbiddenWord = "forbidden";
  let index = code.indexOf(forbiddenWord);
  while (index !== -1) {
    diagnostics.push({
      from: index,
      to: index + forbiddenWord.length,
      severity: "error",
      message: `'${forbiddenWord}' is a forbidden word`,
    });
    index = code.indexOf(forbiddenWord, index + 1);
  }

  code.split("\n").forEach((line, i) => {
    if (line.length > 45) {
      diagnostics.push({
        from: view.state.doc.line(i + 1).from,
        to: view.state.doc.line(i + 1).to,
        severity: "warning",
        message: "line is too long (> 45 characters)",
      });
    }
  });

  return diagnostics;
});

new EditorView({
  state: EditorState.create({
    doc:
      "// Custom Linter Example\n" +
      "function example() {\n" +
      "  console.log('This is a test');\n" +
      "  let forbidden = 'This word is not allowed';\n" +
      "  return 'This line is too long and will trigger a warning';\n" +
      "}",
    extensions: [yorkieLinter, lintGutter()],
  }),
  parent: document.getElementById("editor")!,
});
