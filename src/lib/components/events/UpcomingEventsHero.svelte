<script lang="ts">
import type { EventType } from "$lib/components/events/event_types"
import EventCard from "$lib/components/events/EventCard.svelte"

export let events: EventType[]

</script>

<div class="main">
    <div class="inner-wrapper">
        <div class="title">
            Upcoming Events
        </div>
        <div class="events-wrapper">
            {#each events as event}
                <EventCard bind:event />
            {/each}
        </div>
    </div>
</div>

<style lang="stylus">
@import "variables"

.main
    padding 40px
    display flex
    .inner-wrapper
        margin-left auto
        max-width 600px
        width 100%
        gap 16px
        display flex
        flex-direction column
        @media (max-width $laptop)
            margin 0 auto

.events-wrapper
    display grid
    grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
    gap 20px
    width 100%

.title
    font-weight 600
    font-size 32px
    @media (max-width $laptop)
        text-align center

</style>