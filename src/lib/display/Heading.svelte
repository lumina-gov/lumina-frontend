<script lang="ts">

import type { IconComponent } from "$lib/utils/icon_type"

import Icon from "./Icon.svelte"

export let left_icon: IconComponent | null = null
export let left_icon_color = "var(--brand)"
export let right_icon: IconComponent | null = null
export let right_icon_color = "var(--brand)"
export let level: 1 | 2 | 3 | 4 | 5 | 6 = 1
export let id: string | null = null
export let underline = false
export let center = false
</script>

<svelte:element
    this={ "h" + level }
    {id}
    class="heading"
    class:center
    class:underline>
    {#if left_icon}
        <Icon
            --color={left_icon_color}
            icon={left_icon}/>
    {/if}
    <slot/>
    {#if right_icon}
        <Icon
            --color={right_icon_color}
            icon={right_icon}/>
    {/if}
</svelte:element>
<style>
.heading {
    font-weight: 700;
    /* display: flex; */
    gap: 0.4em;
    align-items: center;
    margin: 0;
    position: relative;
    scroll-margin-top: 80px;
    z-index: 1;
    &.center {
        display: flex;
        justify-content: center;
    }
    &.underline {
        padding: 0 4px;
        padding-bottom: 2px;
        &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 50%;
            background: var(--brand);
            opacity: 0.5;
            z-index: -1;
        }
    }
}
</style>