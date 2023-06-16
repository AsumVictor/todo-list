import "./style.css";
import DocumentEvent, { elEvent } from "./utilities/DocumentEvents";
import DisplayTodoListOnDOM from "./utilities/DisplayElement";

DocumentEvent("DOMContentLoaded", () => {
  DisplayTodoListOnDOM();
});

DisplayTodoListOnDOM();