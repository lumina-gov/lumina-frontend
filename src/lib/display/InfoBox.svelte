<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"
import type { SvelteComponent } from "svelte"

import Tag from "./Tag.svelte"

export let color: Prop<Tag, "color">
export let tag: string
export let icon: typeof SvelteComponent
export let title: string
export let description: string | null = null

</script>
<div class="box">
    <div class="icon {color}">
        <svelte:component this={ icon }/>
    </div>
    <div class="right">
        <Tag bind:color>
            { tag }
        </Tag>
        <h3>{ title }</h3>
        {#if description}
            <div class="description">
                { description }
            </div>
        {/if}
        {#if $$slots.default}
            <slot/>
        {/if}
    </div>
</div>
<style lang="stylus">
@import "variables"

.box
    display flex
    gap 16px
    .description
        opacity 0.6
        font-size 18px
    .icon
        display inline-flex
        font-size 24px
        &.red
            color $red
        &.brand
            color $brand
        &.blue
            color $blue
        &.white
            color white
        &.yellow
            color $yellow
    .right
        display flex
        flex-direction column
        align-items flex-start
        gap 12px
        h3
            margin 0
            font-size 18px
            font-weight 600
</style>