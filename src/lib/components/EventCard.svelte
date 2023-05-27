<script lang="ts">
import MapMarker from "svelte-material-icons/MapMarker.svelte"
import Clock from "svelte-material-icons/Clock.svelte"

export let event: {
    link: string,
    date: {
        time: {
            hour: string,
            minutes: string,
            pm: boolean
        },
        day: number,
        month: string,
        year: number
    },
    title: string,
    type: string,
    img: string,
    location: string
}

</script>

<a
    class="main-link"
    href={event.link}>
    <div
        style:background-image="url('{ event.img }')"
        class="img">
        <div class="date-banner">
            <div class="day">
                { event.date.day }
            </div>
            <div class="month-year">
                { event.date.month } { event.date.year }
            </div>
        </div>
    </div>
    <div class="info-wrapper">
        <div class="event-type">
            { event.type }
        </div>
        <div class="event-title">
            { event.title }
        </div>
        <div class="info-block">
            <div class="icon">
                <svelte:component this={ MapMarker } />
            </div>
            <div class="info">
                { event.location }
            </div>
        </div>
        <div class="info-block">
            <div class="icon">
                <svelte:component this={ Clock } />
            </div>
            <div class="info">
                { event.date.day } { event.date.month } { event.date.time.hour }:{ event.date.time.minutes } {#if !event.date.time.pm} AM{:else} PM{/if}
            </div>
        </div>
    </div>
</a>

<style lang="stylus">
@import variables

.main-link
    width 100%
    color white
    cardify()
    overflow hidden
    position relative

    &:hover
        background transparify(white, 8%)

.img
    width 100%
    height 150px
    background-position 50% 50%

.date-banner
    margin-top 15px
    display flex
    background-color white
    position absolute

.day
    background-color $brand
    color white
    font-size 22px
    font-weight 700
    line-height 33px
    padding 0 10px

.month-year
    padding 5px 10px
    color $dark
    font-weight 700
    text-transform uppercase
    line-height 24px
    margin auto 0

.info-wrapper
    padding 24px

.event-type
    font-weight 600
    color $brand
    text-transform uppercase
    line-height 24px
    font-size 16px

.event-title
    font-size 18px
    font-weight 600

.info-block
    opacity 0.4
    display flex

.icon
    font-size 20px
    height 20px
    margin-right 10px

.info
    font-size 14px
    font-weight 500
    margin auto 0

</style>
