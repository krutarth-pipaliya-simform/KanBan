import createButton from "./createButton.js";
import dragOverEvent from "./dragOverEvent.js";
import { editTask } from "./editTask.js";

export default function startEventHandlers() {
    dragOverEvent();
    createButton();
    editTask();
}
