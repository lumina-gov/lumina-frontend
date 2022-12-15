<script lang="ts">
import Magnify from "svelte-material-icons/Magnify.svelte"

export let placeholder = "Search..."
export let search: string
let search_el: HTMLInputElement

export function focus() {
    search_el.focus()
}

</script>
<div class="search-wrapper" on:click={() => search_el.focus()}>
    <Magnify/>
    <input
        on:keydown
        on:keyup
        placeholder={placeholder}
        bind:this={search_el}
        bind:value={search}/>
</div>
<style lang="stylus">
@import "variables"

.search-wrapper
    padding 0 12px
    background transparify(white, 8%)
    display flex
    align-items center
    font-size 16px
    gap 8px
    input
        background 0
        border 0
        flex 1
        padding 8px 0
        font-size 16px
        outline 0
        color white

</style>