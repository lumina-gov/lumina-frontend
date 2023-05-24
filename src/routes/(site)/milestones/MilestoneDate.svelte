<script lang="ts">
    import Calendar from "svelte-material-icons/Calendar.svelte"
    import { onMount, onDestroy } from "svelte"
    
    // if the date difference is less than 3 days, we want to show something like:
    // "3 hours ago", "2 days ago", "10 minutes ago", etc.
    
    export let date: Date
    
    function get_day_suffix(day: number) {
        switch (day % 10) {
            case 1: return "st"
            case 2: return "nd"
            case 3: return "rd"
            default: return "th"
        }
    }
    
    let now = new Date()
    
    let interval: ReturnType<typeof setInterval> | null = null
    onMount(() => {
        interval = setInterval(() => {
            now = new Date()
        }, 5000)
    })
    
    onDestroy(() => {
        if (interval) clearInterval(interval)
    })
    
    $: diff = now.getTime() - date.getTime()
    $: diff_in_seconds = diff / 1000
    $: diff_in_minutes = diff_in_seconds / 60
    $: diff_in_hours = diff_in_minutes / 60
    $: diff_in_days = diff_in_hours / 24
    
    $: use_ago = diff_in_days <= 3
    $: units_ago = diff_in_hours <= 1 ? "minute" : diff_in_days <= 1 ? "hour" : "day"
    $: units = diff_in_hours <= 1 ? diff_in_minutes : diff_in_days <= 1 ? diff_in_hours : diff_in_days
    $: ago = `${Math.ceil(units)} ${units_ago}${units > 1 ? "s" : ""} ago`
    
    $: day_with_suffix = date.getDate() + get_day_suffix(date.getDate())
    $: month = date.toLocaleString("en-us", { month: "short" })
    $: year = date.getFullYear()
    
    </script>
    <div class="date">
            
            <span class="main_date">{ day_with_suffix } { month } { year }</span>
            <span class="sub_date">{ ago }</span>
    </div>
    <style lang="stylus">
    
    .date
        text-align right
        justify-content flex-start
        display flex
        flex-direction column
        gap 8px
        font-weight 600
    .main_date
        opacity 1
        font-size 18px
    .sub_date
        opacity 0.5
        font-size 16px
    </style>