<script lang="ts">
import ServiceCard from "$lib/components/ServiceCard.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import type { Props } from "$lib/utils/typed_props"

export let cards: Props<ServiceCard>[] = []
</script>
<div class="main-cards">
    <Grid
        columns={{
            laptop: 12,
            tablet: 6,
            mobile: 3
        }}
        side_padding={true}>
        {#each cards as card}
            <GridItem
                align_items="stretch"
                columns={{
                    laptop: "span 3",
                    tablet: "span 3",
                    mobile: "span 3"
                }}
                flex_direction="row">
                <ServiceCard
                    {...card}
                    reset_bg={true}
                    size="large"/>
            </GridItem>
        {/each}
    </Grid>
</div>
<style>
.main-cards {
    height: 0;
    margin-top: 40px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 900px) {
        margin: 0;
        height: unset;
        padding: 20px;
    }
}
</style>
