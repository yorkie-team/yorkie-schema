import { EditorState } from "@codemirror/state";
import { EditorView, lineNumbers } from "@codemirror/view";

import { linter } from "./codemirror-language/index";

new EditorView({
  state: EditorState.create({
    doc: "# Your Liveblocks schema here\ntype User {\n  name: String\n  age: Number\n}",
    extensions: [lineNumbers(), linter],
  }),
  parent: document.getElementById("editor")!,
});
