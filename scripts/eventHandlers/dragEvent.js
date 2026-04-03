import addDraggingClass from "../services/addDraggingClass.js";
import { getMiddleHeight, getMiddleWidth } from "../services/getMiddle.js";
import { setMouseOffset } from "../services/mouseOffest.js";
import removeDraggingClass from "../services/removeDraggingClass.js";

export default function dragEvent() {
    let dragables = document.querySelectorAll(".draggable");
    dragables.forEach((elem) => {
        // add for drag start
        elem.addEventListener("dragstart", (e) => {
            addDraggingClass(elem);
            setMouseOffset({
                x: getMiddleWidth(elem) - e.pageX,
                y: getMiddleHeight(elem) - e.pageY,
            });

        });
        //add for drag end
        elem.addEventListener("dragend", () => {
            removeDraggingClass(elem);
            setMouseOffset({ x: 0, y: 0 });
        });
    });
}
