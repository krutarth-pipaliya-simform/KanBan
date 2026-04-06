export default function createTaskElement(task) {
    let li = document.createElement("li");
    li.classList.add("task-list-item", "draggable");
    li.setAttribute("draggable", "true");

    let div = document.createElement("div");
    div.classList.add("task");

    let title = document.createElement("h3");
    title.classList.add("task-title");
    title.textContent = task.title;

    let description = document.createElement("div");
    description.classList.add("task-description");
    description.textContent = task.description;

    div.append(title, description);
    li.appendChild(div);

    return li;
}
