<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import Newspaper from "svelte-material-icons/Newspaper.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import type { NewsPostTag } from "$lib/hygraph/graphql-types"

export let title: string
export let url: string
export let date: Date | null
export let tags: Pick<NewsPostTag, "name" | "tagSlug">[]

// date formatted as 12th Aug 2021
$: formatted_date = date ? date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric"
}) : ""

</script>
<a
    class="press-release"
    href={url}
    rel="noreferrer">
    <div>
        <Icon
            --size="24px"
            icon={Newspaper}/>
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
                <Tag>{ tag.name }</Tag>
            {/each}
        </div>
        <Icon
            --size="24px"
            icon={ChevronRight}/>
    </div>
</a>
<style>
.press-release {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.04);
    gap: 8px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    & .title {
        font-size: 18px;
        font-weight: 600;
        color: white;
    }

    & .date {
        font-size: 14px;
        opacity: 0.5;
        color: white;
    }

    & .tags {
        display: flex;
        gap: 8px;
    }
}
</style>