<script lang="ts">
import VerticalDiagramCard from "$lib/components/general_components/vertical_linked_diagram/VerticalDiagramCard.svelte"
import type { Prop } from "$lib/utils/typed_props"
export let diagramSections: Prop<VerticalDiagramCard, "cardInfo">[]

</script>

<div class="wrapper">
    {#each diagramSections as cardInfo, i}
        <VerticalDiagramCard bind:cardInfo/>
    {/each}
</div>

<style lang="stylus">
.wrapper
    margin 0 auto
    margin-top 60px
    max-width 600px

</style>