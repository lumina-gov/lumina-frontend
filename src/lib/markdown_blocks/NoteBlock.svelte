<script lang="ts">
import Callout from "$lib/display/Callout.svelte"
import type { ContainerDirective } from "mdast-util-directive"
import BlocksArray from "./BlocksArray.svelte"

export let block: ContainerDirective

enum Mapping {
    warning = "warning",
    error = "error",
    note = "note",
    tip = "success",
}

$: type = Mapping[block.name as keyof typeof Mapping]
</script>
<Callout type={type}>
    <BlocksArray blocks={block.children}/>
</Callout>