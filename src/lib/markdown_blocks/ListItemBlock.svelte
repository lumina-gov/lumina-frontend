<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { ListItem } from "mdast-util-from-markdown/lib"
import CheckboxBlank from "svelte-material-icons/CheckboxBlank.svelte"
import CheckboxMarked from "svelte-material-icons/CheckboxMarked.svelte"
import BlocksArray from "./BlocksArray.svelte"

export let block: ListItem
</script>
<li>
    {#if typeof block.checked === "boolean"}
        <Icon icon={block.checked ? CheckboxMarked : CheckboxBlank}/>
    {/if}
    <BlocksArray blocks={block.children}/>
</li>
<style lang="stylus">
@import variables

li
    margin 0
    list-style initial
    padding-left 0.8em

</style>