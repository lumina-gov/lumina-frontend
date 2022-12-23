<script lang="ts">
import Calendar from "svelte-material-icons/Calendar.svelte"

export let date: Date

function get_day_suffix(day: number) {
    switch (day % 10) {
    case 1: return "st"
    case 2: return "nd"
    case 3: return "rd"
    default: return "th"
    }
}

$: day_with_suffix = date.getDate() + get_day_suffix(date.getDate())
$: month = date.toLocaleString("en-us", { month: "short" })
$: year = date.getFullYear()

</script>
<div class="date">
    <Calendar size={18}/>
    <span>{day_with_suffix} {month} {year}</span>
</div>
<style lang="stylus">

.date
    display flex
    gap 8px
    align-items center
    font-size 14px
    color white
    opacity 0.5
    font-weight 600
</style>