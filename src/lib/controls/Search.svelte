<script lang="ts">
import Magnify from "svelte-material-icons/Magnify.svelte"

export let placeholder = "Search..."
export let search: string
let search_el: HTMLInputElement

export function focus() {
    search_el.focus()
}

</script>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="search-wrapper"
    on:keydown={ e => {
        if (e.key === "Enter") {
            e.preventDefault()
            e.stopPropagation()
        }
    } }
    on:click={ () => search_el.focus() }>
    <Magnify/>
    <input
        bind:this={ search_el }
        placeholder={placeholder}
        on:keydown
        on:keyup
        bind:value={ search }/>
</div>
<style>
.search-wrapper {
    padding: 0 12px;
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 8px;
}

.search-wrapper input {
    background: 0;
    border: 0;
    flex: 1;
    padding: 8px 0;
    font-size: 16px;
    outline: 0;
    color: white
}
</style>