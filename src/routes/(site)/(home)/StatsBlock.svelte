<script lang="ts">
    import Grid from "$lib/components/layouts/Grid.svelte"
    import GridItem from "$lib/components/layouts/GridItem.svelte"
import type { SvelteComponent } from "svelte"

export let stats: {
    value: string | number,
    name: string,
    icon: typeof SvelteComponent,
    color: string
}[]

</script>

<Grid side_padding={false} columns={{
    laptop: 16,
    tablet: 8,
    mobile: 4
}}>
    {#each stats as stat}
        <GridItem
            align_items="center"
            text_align="center"
            columns={{
                laptop: "span 4",
                tablet: "span 2",
                mobile: "span 2"
            }}>
            <div class="stat-icon" style="color: {stat.color};">
                <svelte:component this={stat.icon} />
            </div>
            <div class="stat-value">
                <span>{stat.value}</span>
            </div>
            <div class="stat-name">
                <span>{stat.name}</span>
            </div>
        </GridItem>
    {/each}
</Grid>

<style lang="stylus">
@import "variables"

.stat-icon
    font-size 48px

.stat-value
    font-size 36px
    padding-bottom 4px
    font-weight 600

.stat-name
    font-size 18px
    opacity 0.5

</style>