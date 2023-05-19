<script lang="ts">
import type { TreeItem } from "$lib/types/TreeItem"
import RadioboxBlank from "svelte-material-icons/RadioboxBlank.svelte"
import RadioboxMarked from "svelte-material-icons/RadioboxMarked.svelte"

export let toggled = false
export let item: TreeItem

</script>
<div class="item">
    <div
        class="text"
        on:keydown={ e => {
            if (e.key === "Enter") {
                toggled = !toggled
            }
        } }
        on:click={ () => toggled = !toggled }>
        <div class="icon">
            {#if toggled}
                <RadioboxMarked />
            {:else}
                <RadioboxBlank />
            {/if}
        </div>
        {#if item.prefix}
            <span class="prefix">
                { item.prefix }
            </span>
        {/if}
        {#if item.title}
            <span class="title">
                { item.title }
            </span>
        {/if}
    </div>
    {#if item.children.length !== 0 && toggled}
        <div class="children">
            {#each item.children as child}
                <svelte:self item={child}/>
            {/each}
        </div>
    {/if}
</div>
<style lang="stylus">
@import 'variables'

.text
    display flex
    padding 6px
    gap 12px
    align-items center
    font-weight 600
    font-size 18px
    cursor pointer
    .icon
        color $brand
    .prefix
        opacity 0.4
.children
    padding-left 20px

</style>