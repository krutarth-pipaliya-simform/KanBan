import { getTasks, setTasks } from "../services/getSetTasks.js";
import renderTasks from "../services/renderTasks.js";

export default function createButton() {
    let button = document.querySelector(".create-new-button");
    button.addEventListener("click", (e) => {
        let tasks = getTasks();
        if (tasks.todo === undefined)
            tasks.todo = [];
        tasks.todo.push({
            id: tasks.todo.length,
            title: "new",
            description: "description",
        });
        setTasks(tasks);
        renderTasks();
    });
}
