export default function dragOverEvent() {
    const containers = document.querySelectorAll(".task-list-container");

    containers.forEach((container) => {
        container.addEventListener("dragover", (e) => {
            e.preventDefault();

            const draggingEle = document.querySelector(".dragging");
            const mouseY = e.clientY;

            const children = [...container.lastElementChild.children];

            const nearestIndex = children.reduce((acc, item, index) => {
                if (item.classList.contains("dragging")) return acc;
                if (acc === -1) return index;
                const accRect = children[acc].getBoundingClientRect();
                const curRect = item.getBoundingClientRect();

                const accMid = accRect.top + accRect.height / 2;
                const curMid = curRect.top + curRect.height / 2;

                if (Math.abs(mouseY - curMid) < Math.abs(mouseY - accMid)) {
                    return index;
                }

                return acc;
            }, -1);

            if (nearestIndex !== -1) {
                let rect = children[nearestIndex].getBoundingClientRect();
                if (rect.top + rect.height / 2 > e.clientY) {
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
