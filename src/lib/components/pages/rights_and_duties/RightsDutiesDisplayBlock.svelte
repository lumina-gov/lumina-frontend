<script lang="ts">
import InfoCard from "$lib/components/jobs/InfoCard.svelte"
import InfoBox from "$lib/components/general_components/InfoBox.svelte"
import ScrollableDisplay from "$lib/components/general_components/ScrollableDisplay.svelte"
import type { HeaderInfoType } from "$lib/components/general_components/general_components_types"
import type { ScrollableDisplayCardType } from "$lib/components/general_components/general_components_types"
import SubHeading from "$lib/components/general_components/SubHeading.svelte";

export let headerInfo: HeaderInfoType
export let displayInfo: ScrollableDisplayCardType[]

</script>

<div class="main">
    <SubHeading bind:headerInfo  />
    <ScrollableDisplay bind:displayInfo />
</div>

<style lang="stylus">
@import "variables"

.main
    display flex
    flex-direction column

</style>