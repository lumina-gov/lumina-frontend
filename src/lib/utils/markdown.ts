import type { TreeItem } from "$lib/types/TreeItem"
import type { marked } from "marked"

export function convert_lex_to_toc_tree(tokens: marked.TokensList) {
    const tree = { prefix: "Table of Contents", children: [] } as TreeItem

    const tree_stack: TreeItem[] = [tree]

    const prefixes: {[key: number]: string} = {
        [1]: "Division",
        [2]: "Part",
        [3]: "Section"
    }

    let i = 0

    while (i < tokens.length) {
        const token = tokens[i]
        if (token.type === "heading") {
            const level = token.depth
            const title = token.text
            const prefix = prefixes[level]
            const item: TreeItem = {
                prefix,
                title,
                children: []
            }

            if (tree_stack.length - 1 === level) { // current item is a sibling of last item on stack
                tree_stack.pop()
                tree_stack[tree_stack.length - 1].children.push(item)
                tree_stack.push(item)
            } else if (tree_stack.length - 1< level) { // current item is a child of last item on stack
                tree_stack[tree_stack.length - 1].children.push(item)
                tree_stack.push(item)
            } else { // current item is a sibling of an ancestor of current item
                while (tree_stack.length > level) {
                    tree_stack.pop()
                }
                tree_stack[tree_stack.length - 1].children.push(item)
                tree_stack.push(item)
            }
            item.prefix += ` ${tree_stack[tree_stack.length - 2].children.length}`
        }
        i++
    }

    return tree.children
}
