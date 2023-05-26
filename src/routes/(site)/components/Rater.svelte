<script lang="ts">
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import future from "$lib/utils/future"
import Star from "svelte-material-icons/Star.svelte"

async function rate(_rating: number) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    rated = true
}

let loading = false

let hovering_on: number | null = null
let rated = false
</script>
<div class="rating-hero">
    <div class="rating-card">
        {#if loading}
            <OverlayLoading/>
        {/if}
        {#if rated === false}
            <div class="subtitle">Did you find this page helpful?</div>
            <div class="star-wrapper">
                {#each Array(5) as _, i}
                    <div
                        class="star"
                        class:filled={ hovering_on !== null && hovering_on > i - 1 }
                        role="button"
                        tabindex="0"
                        on:click={ () => future(rate(i), status => loading = status) }
                        on:keypress={ e => e.key === "Enter" && rate(i) }
                        on:mouseenter={ () => hovering_on = i }
                        on:mouseleave={ () => hovering_on = null }>
                        <Star/>
                    </div>
                {/each}
            </div>
        {:else}
            <div class="subtitle">Thank you for your feedback!</div>
        {/if}
    </div>
</div>
<style lang="stylus">
@import variables

.rating-hero
    background transparify(white, 4%)
    border-bottom 1px solid transparify(white, 8%)
    padding 20px
    color white
    .subtitle
        font-size 18px
        opacity 0.8
        font-weight 500
    .rating-card
        text-align center
        overflow hidden
        display flex
        flex-direction column
        gap 10px
        justify-content center
        text-align center
        font-weight 600
        color white
        max-width 400px
        padding 20px
        background transparify(white, 4%)
        margin auto
        border-radius 8px
    .star-wrapper
        display flex
        justify-content center
    .star
        color transparify(white, 30%)
        font-size 28px
        cursor pointer
        &.filled
            color $brand
</style>