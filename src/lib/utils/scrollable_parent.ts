export function getNearestScrollableParent(wrapper: HTMLElement, direction: "horizontal" | "vertical"): HTMLElement | null {
    let nearestScrollableParent: HTMLElement | null = wrapper.parentElement

    while (nearestScrollableParent) {
        const computedStyle = getComputedStyle(nearestScrollableParent)
        const overflowStyle = direction === "horizontal" ? computedStyle.overflowX : computedStyle.overflowY

        if (overflowStyle === "scroll" || overflowStyle === "auto") {
            break
        }

        nearestScrollableParent = nearestScrollableParent.parentElement
    }

    return nearestScrollableParent
}