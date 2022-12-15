<script lang="ts">
import type { ScrollableDisplayCardType } from "$lib/components/general_components/general_components_types"
import TagOutline from "svelte-material-icons/TagOutline.svelte"
export let displayInfo: ScrollableDisplayCardType[]

</script>

<div class="main">
    {#each displayInfo as card}
        <div class="card">
            <div class="left">
                <div class="header-icon">
                    <svelte:component this={card.icon}/>
                </div>
                <div class="type">
                    {card.type}
                </div>
                <div class="title">
                    {card.title}
                </div>
                <div class="description">
                    {card.description}
                </div>
            </div>
            <div class="right">
                {#each card.tags as tag}
                    <div class="question-answer-row">
                        <div class="question">
                            {tag.question}
                        </div>
                        <div class="tag" style="background-color: {tag.color};">
                            <div class="answer-icon">
                                <svelte:component this={tag.answerIcon}/>
                            </div>
                            <div class="answer-text">
                                {tag.answerText}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>

<style lang="stylus">
@import "variables"

.main
    border-radius 8px
    padding 40px
    background-color #F2F2F1
    height: 660px
    overflow-y scroll

.card
    display grid
    grid-template-columns 1fr 1fr
    margin-bottom 60px
    grid-gap 0 40px


.header-icon
    font-size 40px
    height 40px
    color $brand
    margin-bottom 10px

.type
    font-size 16px
    line-height 24px
    font-weight 600
    text-transform uppercase
    opacity 0.25

.title
    font-size 22px
    line-height 34px
    font-weight 600
    margin-bottom 8px

.description
    border-radius 5px
    padding 10px
    background-color white
    font-size 18px
    line-height 22px
    opacity 0.9
    max-width 380px
    font-weight 400

.question-answer-row
    display flex
    margin-bottom 10px

.question
    max-width 160px
    width 100%
    text-transform uppercase
    opacity 0.25
    font-size 16px
    font-weight 600
    margin auto 0

.tag
    display flex
    color white
    font-size 16px
    padding 5px
    border-radius 5px

.answer-icon
    margin auto 0
    margin-right 5px

</style>