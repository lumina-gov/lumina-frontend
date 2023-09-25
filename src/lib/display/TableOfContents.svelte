<script lang="ts">
import TableOfContentsItem from "$lib/subcomponents/TableOfContentsItem.svelte"
import type { TreeItem } from "$lib/types/TreeItem"

export let items: TreeItem[] = []

$: root = {
    prefix: "Table of Contents",
    children: items
}

</script>
<div class="toc">
    <TableOfContentsItem
        item={root}
        toggled={true}/>
</div>
<style>
.toc {
    background: rgba(255, 255, 255, 0.04);
    padding: 8px;
    border-radius: 4px;
}
</style>