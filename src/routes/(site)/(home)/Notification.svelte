<script lang="ts">
import DateComponent from "$lib/display/Date.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { Props } from "$lib/utils/typed_props"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Dot from "svelte-material-icons/Circle.svelte"


export let title: string
export let tag: Props<Tag>
export let date: Date
export let href: string | undefined = undefined
$: element_tag = href ? "a" : "div" as "a" | "div"
</script>
<svelte:element
    this={ element_tag }
    class="notification"
    {href}
>
    <div class="vert">
        <div class="top">
            <Icon
                color="brand"
                icon={Dot}
                size={14}/>
            <div class="title">
                { title }
            </div>
        </div>
        <FlexWrap>
            <Tag {...tag}/>
            <DateComponent date={date}/>
        </FlexWrap>
    </div>
    {#if href}
        <Icon icon={ChevronRight}/>
    {/if}
</svelte:element>
<style lang="stylus">
@import variables

.notification
    display flex
    flex-direction row
    gap 8px
    align-items center
    padding 12px
    border-bottom 1px solid transparify(white, 10%)
    .vert
        display flex
        flex-direction column
        gap 8px
        .top
            display flex
            gap 8px
            flex-direction row
            align-items center
            .title
                font-weight 600
                font-size 16px
</style>