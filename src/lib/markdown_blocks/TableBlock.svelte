<script lang="ts">
import type { Table } from "mdast-util-gfm-table/lib"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

export let block: Table

$: columns = block.children?.[0].children.length ?? 0
</script>
<div
    style:--columns={ columns.toString() }
    class="grid-table">
    {#each block.children as row, i}
        {#each row.children as cell}
            <div
                class="grid-cell"
                class:header={ i === 0 }>
                <PhrasingContentArray children={cell.children}/>
            </div>
        {/each}
    {/each}
</div>
<style lang="stylus">
@import variables

.grid-table
    display grid
    border-radius 4px
    width 100%
    grid-template-columns repeat( var(--columns), 1fr)
    overflow hidden
    border-left 1px solid transparify(white, 8%)
    border-top 1px solid transparify(white, 8%)

.grid-cell
    padding 4px 8px
    &::after
        display block
        font-size 0.1px

    &.header
        background transparify(white, 8%)

    border-bottom 1px solid transparify(white, 8%)
    border-right 1px solid transparify(white, 8%)
    &:last-child
        border-bottom-right-radius 4px

</style>