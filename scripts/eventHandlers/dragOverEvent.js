import { addContainerHighlight, removeContainerHighlight } from "../services/containerHighlight.js";
import { getMiddleHeight} from "../services/getMiddle.js";
import getNearestIndex from "../services/getNearestIndex.js";
import { getMouseOffset } from "../services/mouseOffest.js";
import syncListWithLocalstorage from "../services/syncListWithLocalstorage.js";

export default function dragOverEvent() {
    const wrapper = document.querySelector(".task-list-container-wrapper");

    wrapper.addEventListener("dragover", (e) => {
        e.preventDefault();

        const mouseOffest = getMouseOffset();
        const mouseX = e.clientX + mouseOffest.x;
        const mouseY = e.clientY + mouseOffest.y;

        const containers = [...wrapper.children];
        const container = containers[getNearestIndex(mouseX, containers, true)];
        const children = [...container.lastElementChild.children];

        const draggingEle = document.querySelector(".dragging");
        const nearestIndex = getNearestIndex(mouseY, children, false);

        if (nearestIndex !== -1) {
            let nearestMiddleHeight = getMiddleHeight(children[nearestIndex]);
            if (nearestMiddleHeight > mouseY) {
                children[nearestIndex].before(draggingEle);
            } else {
                children[nearestIndex].after(draggingEle);
            }
            removeContainerHighlight();
            addContainerHighlight(container);
        } else {
            container.lastElementChild.appendChild(draggingEle);
        }

        syncListWithLocalstorage();
    });
}
