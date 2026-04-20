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

    let button = document.createElement("button");
    button.classList.add("delete-button", "delete");
    button.setAttribute("task-id", task.index);
    button.innerHTML = `<svg
        class = 'delete'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1rem"
        height="1rem"
        fill="currentColor"
        >
            <path class = 'delete' d="M10 2l-1 1H4v2h1v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5h1V3h-5l-1-1h-4zm-3 3h10v15H7V5zm2 2v11h2V7H9zm4 0v11h2V7h-2z"/>
        </svg>`;
    div.append(title, description, button);

    li.appendChild(div);

    return li;
}
