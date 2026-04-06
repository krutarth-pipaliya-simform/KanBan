import {
    addEditableClass,
    removeEditableClass,
} from "../services/editableClass.js";

export function editTask() {
    let wrapper = document.querySelector(".task-list-container-wrapper");
    wrapper.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("task-title") ||
            e.target.classList.contains("task-description")
        ) {
            addEditableClass(e.target);
            e.target.addEventListener("blur", removeEditableClass, {
                once: true,
            });
        }
    });
}
