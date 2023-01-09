<script lang="ts">
import type { SvelteComponent } from "svelte"
import type { Prop } from "$lib/utils/typed_props"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Icon from "$lib/display/Icon.svelte"
import Card from "./Card.svelte"
import Tag from "$lib/display/Tag.svelte"

export let icon: typeof SvelteComponent
export let title: string
export let href: string | undefined = undefined
export let disabled = false
export let description: string
export let tag: {
    color: Prop<Tag, "color">
    text: string,
} | undefined = undefined

</script>

<Card
    direction="horizontal"
    gap="16px"
    {href}
    interactive={!disabled}
    opacity={disabled}
    padding="24px"
    on:click
    on:keyup
>
    <Icon
        {icon}
        size={32} />
    <div class="box">
        <div class="top-part">
            <div class="title">{ title }</div>
            {#if tag}
                <Tag color={tag.color}>{ tag.text }</Tag>
            {/if}
        </div>
        <div class="description">
            { description }
        </div>
    </div>
    {#if !disabled}
        <ChevronRight size="24" />
    {/if}
</Card>

<style lang="stylus">
@import 'variables'

.box
    display flex
    flex-direction column
    align-items flex-start
    justify-content center
    flex 1
    gap 8px

.description
    opacity 0.5

.title
    font-size 18px
    font-weight 700

.top-part
    display flex
    align-items center
    gap 12px
    @media (max-width: 600px)
        flex-direction column-reverse

</style>
