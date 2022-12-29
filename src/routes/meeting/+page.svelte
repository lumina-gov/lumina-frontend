<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Hero from "$lib/components/layouts/Hero.svelte"
import Heading from "$lib/display/Heading.svelte"
import Calendar from "svelte-material-icons/Calendar.svelte"
import type { PageData } from "./$types"
import Tag from "$lib/display/Tag.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"

export let data: PageData

// format date by "Weekday HH:MM AM/PM" in the user's timezone
function format_date(date: Date) {
    return date.toLocaleString("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })
}

</script>
<Hero>
    <Card padding="24px" align_items="flex-start" gap={24}>
        <Paragraph>Dates are formatted in your local timezone</Paragraph>
        <!-- <Heading level={2} left_icon={Calendar}>Pick as many times that suit you</Heading> -->
        {#each data.dates as date}
            <div class="event">
                <Heading level={2}>{date.name}</Heading>
                <div class="date">
                    { format_date(date.date)}
                </div>
                <div class="count">
                    {date.users.length}
                </div>
                <div class="tags">
                    {#each date.users as user}
                        <Tag>{ user }</Tag>
                    {/each}
                </div>
            </div>
        {/each}
    </Card>
</Hero>
<style lang="stylus">
@import "variables"

.event
    display: flex
    flex-direction: row
    align-items center
    gap: 12px

.count
    font-size 16px
    padding 4px 8px
    border-radius 100px
    color transparify(white, 50%)
    background transparify(white, 10%)

.date
    font-size: 18px
    opacity 0.8

.tags
    display: flex
    flex-direction: row
    gap: 8px
    padding-left 20px
</style>