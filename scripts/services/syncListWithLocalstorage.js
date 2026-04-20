
import { setTasks } from "./getSetTasks.js";
import taskListToArray from "./taskListToArray.js";

export default function syncListWithLocalstorage() {
    const wrapper = document.querySelector(".task-list-container-wrapper");
    let containers = [...wrapper.children];
    let todo = taskListToArray(containers[0].lastElementChild);
    let progress = taskListToArray(containers[1].lastElementChild);
    let validation = taskListToArray(containers[2].lastElementChild);
    let completed = taskListToArray(containers[3].lastElementChild);

    setTasks({
        todo,
        progress,
        validation,
        completed,
    });
}
