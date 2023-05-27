import type { PhrasingContent } from "mdast-util-from-markdown/lib"

export function get_plain_text(content: PhrasingContent[]): string {
    let text = ""
    for (const node of content) {
        // we will recursively call this function for nested nodes
        if (node.type === "text" || node.type === "inlineCode") {
            text += node.value
        }
        if ("children" in node) {
            text += get_plain_text(node.children)
        }
    }

    return text
}