import addDraggingClass from "./addDraggingClass.js";
import { getMiddleHeight, getMiddleWidth } from "./getMiddle.js";
import { setMouseOffset } from "./mouseOffest.js";
import removeDraggingClass from "./removeDraggingClass.js";

export default function addDragEvent(elem) {
    elem.addEventListener("dragstart", (e) => {
        addDraggingClass(elem);
        setMouseOffset({
            x: getMiddleWidth(elem) - e.pageX,
            y: getMiddleHeight(elem) - e.pageY,
        });
    });
    elem.addEventListener('touchstart', (e) => {
        addDraggingClass(elem);
        setMouseOffset({
            x: getMiddleWidth(elem) - e.touches[0].pageX,
            y: getMiddleHeight(elem) - e.touches[0].pageY,
        });
    })
    //add for drag end
    elem.addEventListener("dragend", () => {
        removeDraggingClass(elem);
        setMouseOffset({ x: 0, y: 0 });
    });
    elem.addEventListener('touchend', () => {
        removeDraggingClass(elem);
        setMouseOffset({ x: 0, y: 0 });
    })
}
