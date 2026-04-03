import { getMiddleHeight } from "../services/getMiddle.js";
import { getMouseOffset } from "../services/mouseOffest.js";

export default function dragOverEvent() {
    const containers = document.querySelectorAll(".task-list-container");

    containers.forEach((container) => {
        container.addEventListener("dragover", (e) => {
            e.preventDefault();

            const draggingEle = document.querySelector(".dragging");

            const children = [...container.lastElementChild.children];
            let mouseOffest = getMouseOffset();
            const mouseY = e.pageY + mouseOffest.y;
            const nearestIndex = children.reduce((acc, item, index) => {
                if (item.classList.contains("dragging")) return acc;
                if (acc === -1) return index;

                const accMid = getMiddleHeight(children[acc]);
                const curMid = getMiddleHeight(item);

                if (Math.abs(mouseY - curMid) < Math.abs(mouseY - accMid)) {
                    return index;
                }

                return acc;
            }, -1);

            if (nearestIndex !== -1) {
                let nearestMiddleHeight = getMiddleHeight(
                    children[nearestIndex],
                );
                if (nearestMiddleHeight > mouseY) {
                    children[nearestIndex].before(draggingEle);
                } else {
                    children[nearestIndex].after(draggingEle);
                }
            } else {
                container.lastElementChild.appendChild(draggingEle);
            }
        });
    });
}
