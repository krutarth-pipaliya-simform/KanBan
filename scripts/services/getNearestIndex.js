import { getMiddleHeight, getMiddleWidth } from "./getMiddle.js";

export default function (mouse, children, horizontal = false) {
    return children.reduce((acc, item, index) => {
        if (acc === -1) return index;
        let curMid = horizontal ? getMiddleWidth(item) : getMiddleHeight(item),
            accMid = horizontal
                ? getMiddleWidth(children[acc])
                : getMiddleHeight(children[acc]);
        if (Math.abs(mouse - curMid) < Math.abs(mouse - accMid)) {
            return index;
        }
        return acc;
    }, -1);
}
