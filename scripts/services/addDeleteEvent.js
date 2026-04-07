import syncListWithLocalstorage from "./syncListWithLocalstorage.js";

export default function addDeleteEvent(elem) {
    elem.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            elem.remove();
            syncListWithLocalstorage();
        }
    });
}
