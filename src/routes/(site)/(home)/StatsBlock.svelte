<script lang="ts">
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import type { SvelteComponent } from "svelte"

export let stats: {
    value: string | number,
    name: string,
    icon: typeof SvelteComponent,
    color: string
}[]

</script>

<Grid
    columns={{
        laptop: 16,
        tablet: 8,
        mobile: 4
    }}
    side_padding={false}>
    {#each stats as stat}
        <GridItem
            align_items="center"
            columns={{
                laptop: "span 4",
                tablet: "span 2",
                mobile: "span 2"
            }}
            text_align="center">
            <div
                style:color={ stat.color }
                class="stat-icon">
                <svelte:component this={ stat.icon } />
            </div>
            <div class="stat-value">
                <span>{ stat.value }</span>
            </div>
            <div class="stat-name">
                <span>{ stat.name }</span>
            </div>
        </GridItem>
    {/each}
</Grid>

<style lang="stylus">
@import variables

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