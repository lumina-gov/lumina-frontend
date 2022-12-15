<script lang="ts">
    import Star from "$icons/Star.svelte"

    function rate(rating: number) {
        rated = true
    }

    let hovering_on: number | null = null
    let rated = false
</script>
<div class="rating-hero">
    <div class="rating-card">
        {#if rated === false}
            <div class="subtitle">Did you find this page helpful?</div>
            <div class="star-wrapper">
                {#each Array(5) as _, i}
                    <div
                        class="star"
                        class:filled={hovering_on !== null && hovering_on > i - 1}
                        on:click={() => rate(i)}
                        on:mouseenter={() => hovering_on = i}
                        on:mouseleave={() => hovering_on = null}>
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
@import "variables"

.rating-hero
    background transparify(white, 4%)
    border-bottom 1px solid transparify(white, 4%)
    padding 20px
    position relative
    overflow hidden
    color white
    .subtitle
        font-size 18px
        opacity 0.8
        font-weight 500
    .rating-card
        text-align center
        display flex
        flex-direction column
        gap 10px
        justify-content center
        text-align centre
        font-weight 600
        color white
        max-width 400px
        padding 20px
        background transparify(white, 4%)
        margin auto
        border-radius 5px
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