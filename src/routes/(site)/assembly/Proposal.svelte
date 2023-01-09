<script lang="ts">
import ScriptText from "svelte-material-icons/ScriptText.svelte"
import Comment from "svelte-material-icons/Comment.svelte"
import CheckboxMarkedCircle from "svelte-material-icons/CheckboxMarkedCircle.svelte"
import ArrowExpand from "svelte-material-icons/ArrowExpand.svelte"
import AccountCircle from "svelte-material-icons/AccountCircle.svelte"
import VotingProgressBar from "$lib/display/VotingProgressBar.svelte"
import Heading from "$lib/display/Heading.svelte"
import { onDestroy, onMount } from "svelte"

export let proposal: {
    id: string
    title: string
    discussion_count: number
    votes: {
        for: number
        against: number
    }
    author: string
    time_left: Date
}

let time_left = proposal.time_left

$: days = Math.floor((time_left.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
$: hours = Math.floor((time_left.getTime() - new Date().getTime()) / (1000 * 60 * 60)) % 24
$: minutes = Math.floor((time_left.getTime() - new Date().getTime()) / (1000 * 60)) % 60

let interval: ReturnType<typeof setInterval>

onMount(() => {
    interval = setInterval(() => {
        time_left = proposal.time_left
    }, 1000)
})

onDestroy(() => {
    clearInterval(interval)
})
</script>

<div class="proposal">
    <div class="main">
        <div class="title-area">
            <Heading
                left_icon={ScriptText}
                level={3}>
                { proposal.title }
            </Heading>
            <div class="expand">
                <ArrowExpand />
            </div>
        </div>
        <div class="data">
            <div class="item">
                <div class="icon">
                    <Comment />
                </div>
                <div class="text">
                    { proposal.discussion_count } Comments
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <CheckboxMarkedCircle />
                </div>
                <div class="text">
                    { proposal.votes.for + proposal.votes.against } Votes
                </div>
            </div>
            <div class="item">
                By
                <div class="icon">
                    <AccountCircle/>
                </div>
                <div class="text">
                    { proposal.author }
                </div>
            </div>
        </div>
    </div>
    <div class="voting-info">
        <div class="time-left">
            <div class="time-section">
                <div class="number">
                    { days }
                </div>
                <div class="text">
                    Days
                </div>
            </div>
            <div class="time-section">
                <div class="number">
                    { hours }
                </div>
                <div class="text">
                    Hours
                </div>
            </div>
            <div class="time-section">
                <div class="number">
                    { minutes }
                </div>
                <div class="text">
                    Mins
                </div>
            </div>
        </div>
        <VotingProgressBar
            against_votes={proposal.votes.against}
            for_votes={proposal.votes.for}/>
    </div>
</div>
<style lang="stylus">
@import "variables"

.proposal
    background transparify(white, 4%)
    border-radius 4px
    display flex
    align-items center
    cursor pointer
    &:hover
        background transparify(white, 8%)
    .voting-info
        display flex
        flex-direction column
        gap 8px
        padding 8px

.time-left
    display flex
    gap 8px
    .time-section
        display flex
        flex 1
        align-items center
        gap 4px
        font-size 14px
        font-weight 600
        .text
            text-transform uppercase
            opacity 0.5
.title-area
    display flex
    align-items center
    justify-content space-between
    gap 8px

.expand
    color transparify(white, 50%)
    background transparify(white, 6%)
    padding 2px
    display inline-flex
    border-radius 4px
    font-size 18px

.main
    padding 16px
    flex 1
    display flex
    flex-direction column
    gap 8px
    border-right 1px solid transparify(white, 10%)

.data
    display flex
    align-items center

.item
    display flex
    color transparify(white, 50%)
    border-right 1px solid transparify(white, 10%)
    padding-right 8px
    margin-right 8px
    gap 4px
    &:last-child
        border-right none
        padding-right 0
        margin-right 0
</style>