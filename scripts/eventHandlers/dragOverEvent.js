export default function dragOverEvent() {
    let containers = document.querySelectorAll(".task-list-container");

    containers.forEach((container) => {
        container.addEventListener("dragover", (e) => {
            let draggingEle = document.querySelector(".dragging");
            container.lastElementChild.appendChild(draggingEle);
            let middleOfWidth =
                draggingEle.offsetLeft + draggingEle.offsetWidth / 2;
            let middleOfHeight =
                draggingEle.offsetTop + draggingEle.offsetHeight / 2;
            console.log(draggingEle);
        });
    });
}
