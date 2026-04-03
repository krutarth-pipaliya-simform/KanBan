export default function setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}