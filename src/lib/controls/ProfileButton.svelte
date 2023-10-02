<script lang="ts">
import Profile from "$lib/display/Profile.svelte"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{ click: Event }>()
export let name: string | null = null

function clicked(e: Event) {
    e.stopPropagation()
    dispatch("click", e)
}
</script>
<div
    class="profile-button-wrapper"
    class:has-name={ !!name }
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
    border-radius: 4px;
    width: 100%;
    height: 100%;
    &.has-name {
        justify-content: flex-start;
    }
    &:focus-visible {
        outline: 2px solid var(--brand);
        outline-offset: 2px;
    }
    &:is(:hover, :focus) {
        background: rgba(var(--white-rgb), 0.08);
    }
    &:active {
        background: rgba(var(--white-rgb), 0.12);
    }
    & .label {
        font-size: 16px;
        font-weight: 400;
        color: color-mix(white, 80%);
        padding-right: 4px;
    }
}
</style>