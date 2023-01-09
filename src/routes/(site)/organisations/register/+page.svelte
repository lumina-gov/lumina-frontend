<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import ImagePicker from "$lib/controls/ImagePicker.svelte"


import Input from "$lib/controls/Input.svelte"
import MultiSegment from "$lib/controls/MultiSegment.svelte"
import SingleSegment from "$lib/controls/SingleSegment.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
import Text from "svelte-material-icons/Text.svelte"
import Web from "svelte-material-icons/Web.svelte"
import type { PageData } from "./$types"

type OrganisationType = {
    name: string
    type: string | null
    activities: string[]
    website: string,
    logo: string | null
}

let organisation: OrganisationType = {
    name: "",
    type: null,
    activities: [],
    website: "",
    logo: null
}

export let data: PageData
</script>
<Grid padding_vertical={80}>
    <GridItem
        columns={{
            "laptop": "2 / span 6",
            "tablet": "2 / span 6",
            "mobile": "span 4"
        }}
        gap={24}>
        <Heading left_icon={Domain}>Register Organisation</Heading>
        <VerticalLayout gap={10}>
            <Paragraph><strong>Welcome to the Lumina Organisation Registration Service</strong></Paragraph>
            <Paragraph>Here you can apply for a LON (Lumina Organisation Number), register an organisation.</Paragraph>
            <Paragraph>Provide organisation details below</Paragraph>
        </VerticalLayout>
        <hr>
        <Input
            name="Organisation name"
            left_icon={Text}
            placeholder="Enter organisation name"
            bind:value={ organisation.name }/>
        <SingleSegment
            name="Organisation type"
            options={data.organisation_types}
            placeholder="Type"
            bind:value={ organisation.type }/>
        <MultiSegment
            name="Organisation activities"
            allow_other={query => query}
            options={data.organisation_activities}
            bind:values={ organisation.activities }/>
        <Input
            name="Website - Optional"
            left_icon={Web}
            placeholder="Enter organisation website"
            bind:value={ organisation.website }/>
        <ImagePicker
            name="Logo"
            bind:value={ organisation.logo }/>
        <Button
            right_icon={ChevronRight}
            on:click={ () => {} }>
            Continue
        </Button>
    </GridItem>

</Grid>