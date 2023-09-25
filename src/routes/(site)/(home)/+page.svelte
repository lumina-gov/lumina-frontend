<PageHead
    description="Lumina is a social experiment with the goals of setting up a new innovative and environmentally sustainable city."
    include_suffix={false}
    title="Lumina » The City of the Future"
    type="website"
/>
<SchemaComponent schema={organizationSchema}/>
<script lang="ts">
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/controls/Button.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import type { GovernmentOrganization, WithContext } from "schema-dts"
import PageHead from "$lib/components/PageHead.svelte"
import site_data from "$lib/data/site_data"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Heading from "$lib/display/Heading.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Cog from "svelte-material-icons/Cog.svelte"
import ServicesArea from "./ServicesArea.svelte"
import InformationArea from "./InformationArea.svelte"
import Chart from "./Chart.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import StatBlock from "./StatBlock.svelte"
import Passport from "svelte-material-icons/Passport.svelte"

export const organizationSchema: WithContext<GovernmentOrganization> = {
    "@context": "https://schema.org",
    "@id": "https://lumina.earth/",
    "@type": "GovernmentOrganization",
    "name": "Lumina",
    "description": "Lumina is a proposed autonomous city, with it's own government, laws, and currency.",
    "alternateName": "Government of Lumina",
    "url": "https://lumina.earth",
    "logo": "https://lumina.earth/images/lumina.png",
    "sameAs": [
        site_data.socials.facebook,
        site_data.socials.tiktok,
        site_data.socials.twitter,
        site_data.socials.youtube,
        "https://www.wikidata.org/wiki/Q104434355",
        "https://lumina.earth",
        "https://www.crunchbase.com/organization/lumina-autonomous-government",
    ]
}

export let data

$: user = data.user_store.user

</script>
<Grid
    horizontal_gap={60}
    padding_vertical={100}
    vertical_gap={60}>
    <GridItem
        align_items="flex-start"
        columns={{
            laptop: "span 8",
            tablet: "span 8",
            mobile: "span 4"
        }}
        gap={16}
        justify_content="center">
        <div class="large-paragraph">We're building the</div>
        <h1>city of the <Coloured --color="var(--brand)">future</Coloured></h1>
        {#if user}
            <div class="large-paragraph">
                for <Coloured --color="var(--brand)">{ user.first_name }</Coloured>,
                by <Coloured --color="var(--brand)">{ user.first_name }</Coloured>.
            </div>
            <Button
                style="branded"
                href="/dashboard"
                hug={true}
                left_icon={Apps}>
                Dashboard
            </Button>
        {:else}
            <div class="large-paragraph">
                for <Coloured>you</Coloured>, by <Coloured>you</Coloured>.
            </div>
            <Button
                style="branded"
                href="/auth"
                hug={true}
                right_icon={Settlement}>
                Get citizenship
            </Button>
        {/if}
        <StatBlock
            stat={{
                icon: Passport,
                name: "Citizens registered",
                value: data.user_count,
                color: "#5D35D5"
            }}/>
    </GridItem>
    <GridItem
        align_items="center"
        columns={{
            laptop: "span 8",
            tablet: "span 8",
            mobile: "span 4"
        }}
        justify_content="center"
        position="relative">
        <Chart data={data.user_count_by_interval}/>
    </GridItem>
</Grid>
<Hero translucent={true}>
    <div class="padding"/>
    <Heading
        left_icon={Cog}
        level={2}>Services</Heading>
    <Paragraph>
        The city of Lumina is run by the citizens, for the citizens. Here are some of the services you can use to get involved.
    </Paragraph>
    <ServicesArea/>
</Hero>
<Hero>
    <Heading
        left_icon={Information}
        level={2}>Information</Heading>
    <Paragraph>
        Here you can find information about the city, and how it works.
    </Paragraph>
    <InformationArea/>
</Hero>

<style>

.large-paragraph {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
}

h1 {
    font-weight: 700;
    font-size: 46px;
    display: flex;
    gap: 0.35em;
}
</style>