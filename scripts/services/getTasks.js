export default function getTasks() {
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

