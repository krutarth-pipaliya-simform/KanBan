import syncListWithLocalstorage from "./syncListWithLocalstorage.js";

export function addEditableClass(elem) {
    removeEditableClass();
    console.log(elem);
    elem.classList.add("editable");
    elem.setAttribute("contenteditable", "true");
}

export function removeEditableClass() {
    let elem = document.querySelector(".editable");
    if (elem) {
        elem.classList.remove("editable");
        elem.removeAttribute("contenteditable");
        syncListWithLocalstorage();
    }
}
