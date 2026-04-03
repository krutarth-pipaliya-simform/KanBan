import createButton from "./createButton.js";
import dragOverEvent from "./dragOverEvent.js";

export default function startEventHandlers() {
    dragOverEvent();
    createButton();
}
