import { removeContainerHighlight } from "./containerHighlight.js";

export default function removeDraggingClass(elem) {
    removeContainerHighlight();
    elem.classList.remove('dragging');
}