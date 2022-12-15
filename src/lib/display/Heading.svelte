<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"

import type { SvelteComponent } from "svelte"

import Coloured from "./Coloured.svelte"

export let left_icon: typeof SvelteComponent | null = null
export let left_icon_color: Prop<Coloured, "color"> = "brand"
export let right_icon: typeof SvelteComponent | null = null
export let right_icon_color: Prop<Coloured, "color"> = "brand"
export let level: 1 | 2 | 3 | 4 = 1
</script>

<svelte:element this={"h" + level} class="heading">
    {#if left_icon}
        <div class="icon">
            <Coloured color={left_icon_color}>
                <svelte:component this={left_icon}/>
            </Coloured>
        </div>
    {/if}
    <slot/>
    {#if right_icon}
        <div class="icon">
            <Coloured color={right_icon_color}>
                <svelte:component this={right_icon}/>
            </Coloured>
        </div>
    {/if}
</svelte:element>
<style lang="stylus">
@import 'variables'

.heading
    font-weight 700
    display flex
    gap 0.4em
    align-items center
    margin 0

.icon
    display inline-flex
    font-size 1.2em
</style>