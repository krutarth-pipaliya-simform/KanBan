export default function taskListToArray(tasks) {
    let arrayOfTasks = [...tasks.children];
    return arrayOfTasks.map((item, index) => {
        return {
            index,
            title: item.firstElementChild.firstElementChild.textContent,
            description: item.firstElementChild.lastElementChild.textContent,
        };
    });
}
