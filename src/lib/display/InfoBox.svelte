<script lang="ts">

import type { IconComponent } from "$lib/utils/icon_type"

import Tag from "./Tag.svelte"
import Icon from "./Icon.svelte"

export let color: string
export let tag: string
export let icon: IconComponent
export let title: string
export let description: string | null = null

</script>
<div class="box">
    <Icon
        --color={color}
        --size="24px"
        icon={icon}/>
    <div class="right">
        <Tag --color={color}>
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
<style>
.box {
    display: flex;
    gap: 16px;
}
.description {
    opacity: 0.6;
    font-size: 18px;
}

.right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
}
h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}
</style>