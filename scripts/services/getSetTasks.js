export function getTasks() {
    let tasks =localStorage.getItem('tasks');
    if (!tasks)
        return {
            todo: [],
            progress: [],
            validation: [],
            completed: []
        };
    tasks = JSON.parse(tasks);
    return tasks;
}

export function setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}