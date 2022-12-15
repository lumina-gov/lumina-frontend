
export function click_outside(node: Node, data: ((e: MouseEvent) => void) | { cb: (e: MouseEvent) => void; context: unknown}) {
    const callback = typeof data === "function" ? data : data.cb
    const context = typeof data === "function" ? null : data.context

    function handle_click(e: MouseEvent) {
        if (node.contains(e.target as Node)) {
            return
        }
        // loop through node's parents to check if any of them have the same context as the one passed in
        let parent = e.target as Node | null
        while (parent) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if ((parent as any).context === context) {
                return
            }
            parent = parent.parentNode
        }

        callback(e)
    }
    document.addEventListener("click", handle_click, true)
    return {
        destroy() {
            document.removeEventListener("click", handle_click, true)
        }
    }
}