export function getMiddleHeight(elem) {
    let rect = elem.getBoundingClientRect();
    return rect.top + rect.height / 2;
}

export function getMiddleWidth(elem) {
    let rect = elem.getBoundingClientRect();
    return rect.left + rect.width / 2;
}
