<script lang="ts">
import Profile from "$lib/display/Profile.svelte"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{ click: Event }>()
export let active = false
export let name: string | null = null

function clicked(e: Event) {
    e.stopPropagation()
    dispatch("click", e)
}
</script>
<div
    class="profile-button-wrapper"
    class:active
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keydown={ e => {
        if (e.key === "Enter" || e.key === "Escape") {
            clicked(e)
        }
    } }>
    <Profile/>
    {#if name}
        <div class="label">
            { name }
        </div>
    {/if}
</div>
<style>

.profile-button-wrapper {
    padding: 4px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    &:focus-visible {
        outline: 2px solid var(--brand);
        outline-offset: 2px;
    }
    &:hover,
    &:focus {
        background: color-mix(white, 8%);
    }
    &:active,
    &.active {
        background: color-mix(white, 14%);
    }
    & .label {
        font-size: 16px;
        font-weight: 400;
        color: color-mix(white, 80%);
        padding-right: 4px;
    }
    @media (max-width: 900px) {
        border-radius: 0;
        height: 100%;
        width: 100%;
    }
}
</style>