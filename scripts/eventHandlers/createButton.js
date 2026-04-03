import getTasks from "../services/getTasks.js";
import renderTasks from "../services/renderTasks.js";
import setTasks from "../services/settasks.js";

export default function createButton() {
    let button = document.querySelector(".create-new-button");
    button.addEventListener("click", (e) => {
        let tasks = getTasks();
        tasks.todo.push({
            id: tasks.todo.length,
            title: "new",
            description: "description",
        });
        setTasks(tasks);
        renderTasks();
    });
}
