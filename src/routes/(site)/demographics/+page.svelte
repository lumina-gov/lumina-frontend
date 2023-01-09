<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import Heading from "$lib/display/Heading.svelte"
import ChartBellCurve from "svelte-material-icons/ChartBellCurve.svelte"
</script>
<PageHead
    description="View the demographics of Lumina's society."
    title="Demographics"
/>
<Hero>
    <Heading left_icon={ChartBellCurve}>Demographics</Heading>

    <Heading
        level={2}
        underline={true}>Population</Heading>

    <Heading
        level={2}
        underline={true}>Country of Residence</Heading>

    <Heading
        level={2}
        underline={true}>Age</Heading>

    <Heading
        level={2}
        underline={true}>Gender Distribution</Heading>

    <Heading
        level={2}
        underline={true}>Ethnic Distribution</Heading>

    <Heading
        level={2}
        underline={true}>Occupation</Heading>

</Hero>