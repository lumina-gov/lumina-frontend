
<script lang="ts">
import type {HubType} from "$lib/types/HubType"
import Tag from "$lib/display/Tag.svelte"
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"

export let info: HubType

$: tag = info.link ? "a" : "div"
$: active = info.link ? "active" : ""
</script>

<svelte:element this={tag} href="{info.link}" class="card {active}">
    <div class="header">
        <Tag color={info.tag.color}>{info.tag.text}</Tag>
        {#if active}
            <div class="arrow">
                <svelte:component this={ArrowRight}/>
            </div>
        {/if}
    </div>
    <div class="title">
        <div class="icon">
            <svelte:component this={info.title.icon}/>
        </div>
        <div class="heading">
            {info.title.text}
        </div>
    </div>
    <p>
        {info.description}
    </p>
</svelte:element>

<style lang="stylus">
@import 'variables'

.card
    cardify()
    padding 24px
    display flex
    flex-direction column
    gap 12px
    color white
    opacity 0.5
    &.active
        opacity 1
        &:hover
            background transparify(white, 8%)

.header
    display flex
    justify-content space-between

.tag
    padding 4px 6px
    border-radius 5px
    color white

.arrow
    margin-left auto
    font-size 24px
    display inline-flex

.title
    display flex

.icon
    font-size 24px
    margin-right 10px
    height 24px
    width 24px

.heading
    font-size 20px
    font-weight 600
    margin auto 0

p
    line-height 24px
    margin 0
    padding 0

</style>
