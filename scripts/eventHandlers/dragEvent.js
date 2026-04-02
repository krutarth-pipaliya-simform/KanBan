import addDraggingClass from "../services/addDraggingClass.js";
import removeDraggingClass from "../services/removeDraggingClass.js";

export default function dragEvent() {
    let dragables = document.querySelectorAll(".draggable");
    dragables.forEach((elem) => {
        // add for drag start
        elem.addEventListener("dragstart", () => {
            addDraggingClass(elem);
        });

        //add for drag end
        elem.addEventListener("dragend", () => {
            removeDraggingClass(elem);
        });
    });
}
