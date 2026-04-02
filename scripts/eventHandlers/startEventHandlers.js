import dragEvent from "./dragEvent.js";
import dragOverEvent from "./dragOverEvent.js";

export default function startEventHandlers() {
    dragEvent();
    dragOverEvent();
}
