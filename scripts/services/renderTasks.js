import addDragEvent from "./addDragEvents.js";
import createTaskElement from "./createTaskElement.js";
import getTasks from "./getTasks.js";

export default function renderTasks() {
    let tasks = getTasks();

    for (let i = 0; i < tasks.todo.length; i++) {
        console.log(tasks);
        let task = createTaskElement(tasks.todo[i]);
        document.querySelector("#todo-list").appendChild(task);
        addDragEvent(task);
    }

    for (let i = 0; i < tasks.progress.length; i++) {
        let task = createTaskElement(tasks[progress][i]);
        document.querySelector("#progress-list").appendChild(task);
        addDragEvent(task);
    }

    for (let i = 0; i < tasks.validation.length; i++) {
        let task = createTaskElement(tasks[validation][i]);
        document.querySelector("#validation-list").appendChild(task);
        addDragEvent(task);
    }

    for (let i = 0; i < tasks.completed.length; i++) {
        let task = createTaskElement(tasks[completed][i]);
        document.querySelector("#completed-list").appendChild(task);
        addDragEvent(task);
    }
}
