<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import Newspaper from "svelte-material-icons/Newspaper.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

export let title: string
export let url: string
export let date: Date
export let tags: string[]

// date formatted as 12th Aug 2021
$: formatted_date = date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric"
})

</script>
<a
    class="press-release"
    href={url}
    rel="noreferrer"
    target="_blank">
    <div>
        <Icon
            icon={Newspaper}
            size={24}/>
        <div class="title">
            { title }
        </div>
    </div>
    <div>
        <div class="date">
            { formatted_date }
        </div>
        <div class="tags">
            {#each tags as tag}
                <Tag>{ tag }</Tag>
            {/each}
        </div>
        <Icon
            icon={ChevronRight}
            size={24}/>
    </div>
</a>
<style lang="stylus">
@import 'variables'

.press-release
    display flex
    justify-content space-between
    align-items center
    padding 16px
    border-radius 4px
    background-color transparify(white, 4%)
    gap 8px

    > div
        display flex
        align-items center
        gap 8px

    &:hover
        background-color transparify(white, 8%)

    .title
        font-size 18px
        font-weight 600
        color white

    .date
        font-size 14px
        opacity 0.5
        color white

    .tags
        display: flex
        gap 8px
</style>