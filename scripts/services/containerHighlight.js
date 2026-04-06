export function addContainerHighlight(ele) {
    ele.classList.add('highlighted')
}

export function removeContainerHighlight() {
    let container = document.querySelector('.highlighted');
    if (container)
        container.classList.remove('highlighted');
}