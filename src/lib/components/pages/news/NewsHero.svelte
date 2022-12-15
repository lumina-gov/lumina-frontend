<script lang="ts">
import NewsCard from "$lib/components/pages/news/NewsCard.svelte"
import type { NewsCardType } from "$lib/components/pages/news/news_types"

export let featuredStories: NewsCardType[]

</script>

<div class="main">
    <div class="inner-wrapper">
        <div class="header">
            <h2>
                Recent Announcements
            </h2>
            <div class="subtitle">
                The latest official news, updates and advice from the Lumina government.
            </div>
            <!-- <div class="button">
                <Button right_icon={ChevronRight} style="translucent">
                    More News
                </Button>
            </div> -->
        </div>
        <div class="news">
            {#each featuredStories as newsInfo, i}
                <NewsCard bind:newsInfo />
            {/each}
        </div>
    </div>
</div>

<style lang="stylus">
@import "variables"

.main
    display flex
    padding 40px
    justify-content center
    .news
        display flex
        flex-direction column
        gap 20px
.inner-wrapper
    display grid
    max-width 1200px
    width 100%
    gap 24px
    align-items center
    grid-template-columns 1fr 1fr
    @media (max-width $tablet)
        grid-template-columns 1fr

h2
    font-weight 600
    padding 0
    margin 0
    font-size 28px

.subtitle
    font-size 20px
    line-height 30px
    font-weight 400
    margin-top 12px
    opacity 0.5

</style>