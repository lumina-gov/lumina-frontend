<script lang="ts">
import BlocksArray from "$lib/components/blocks/BlocksArray.svelte"
import { generate_ast } from "$lib/utils/markdown/ast"

export let markdown: string

$: ast = generate_ast(markdown)
</script>

<BlocksArray blocks={ast.children}/>