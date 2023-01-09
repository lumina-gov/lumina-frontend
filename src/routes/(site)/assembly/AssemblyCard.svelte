<script lang="ts">
import AlertCount from "$lib/display/AlertCount.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Heading from "$lib/display/Heading.svelte"
import type { SvelteComponent } from "svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

export let icon: typeof SvelteComponent
export let title: string
export let alert_count: number | null = null
export let description: string
export let href: string

</script>
<a
    class="card"
    href={href}>
    <div class="main">
        <Heading
            left_icon={icon}
            level={3}>
            { title }
            {#if alert_count}
                <AlertCount count={alert_count} />
            {/if}
        </Heading>
        <div class="description">
            { description }
        </div>
    </div>
    <Coloured>
        <ChevronRight size="24px"/>
    </Coloured>
</a>
<style lang="stylus">
@import "variables"

.card
    padding 16px
    border-radius 4px
    background transparify(white, 4%)
    gap 16px
    display flex
    align-items center
    color white
    cursor pointer
    &:hover
        background transparify(white, 8%)

.main
    flex 1
    display flex
    flex-direction column
    gap 8px

.description
    opacity 0.6
    font-size 14px
</style>