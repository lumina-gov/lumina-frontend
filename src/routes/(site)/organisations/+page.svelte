<script lang="ts">
import Flex from "$lib/layouts/Flex.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Button from "$lib/controls/Button.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
import Organisation from "./Organisation.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import type { PageData } from "./$types"
import MenuDown from "svelte-material-icons/MenuDown.svelte"
import SingleSegment from "$lib/controls/SingleSegment.svelte"
import Shape from "svelte-material-icons/Shape.svelte"
import Sitemap from "svelte-material-icons/Sitemap.svelte"
import DotsCircle from "svelte-material-icons/DotsCircle.svelte"
import LoginPrompt from "$lib/components/LoginPrompt.svelte"

export let data: PageData

let filter = {
    type: null,
    status: null
}

$: user = data.user_store.user

</script>
<Grid padding_vertical={80}>
    <GridItem
        columns={{
            laptop: "3 / span 8",
            tablet: "span 8",
            mobile: "span 4",
        }}
        gap={80}>
        <VerticalLayout gap={16}>
            <Heading left_icon={Sitemap}>Organisations</Heading>
            <Paragraph>
                Organisations is the central hub for creating and managing your organisations.
                Users can register and manage organisations, and their details, members and
                permissions.
            </Paragraph>
        </VerticalLayout>

        <VerticalLayout gap={16}>
            <Heading
                left_icon={Domain}
                level={2}>My Organisations</Heading>
            <Paragraph>
                View, filter, and register organisations you are associated with.
            </Paragraph>
            {#if user}
                <Flex
                    align_items="center"
                    direction="row"
                    justify_content="space-between">
                    <FlexWrap>
                        <SingleSegment
                            allow_null={true}
                            left_icon={Shape}
                            options={[
                                "Department",
                                "Agency",
                                "Business",
                            ]}
                            placeholder="Type"
                            right_icon={MenuDown}
                            value={filter.type} />
                        <SingleSegment
                            allow_null={true}
                            left_icon={DotsCircle}
                            options={[
                                "Active",
                                "Inactive",
                                "Halted",
                                "Pending",
                            ]}
                            placeholder="Status"
                            right_icon={MenuDown}
                            value={filter.status} />
                    </FlexWrap>
                    <Button
                        style="translucent"
                        href="/organisations/register"
                        right_icon={Plus}>Create Organisation</Button>
                </Flex>
                <VerticalLayout gap={16}>
                    {#each data.organisations as organisation}
                        <Organisation bind:organisation/>
                    {/each}
                </VerticalLayout>
            {:else}
                <LoginPrompt/>
            {/if}
        </VerticalLayout>
    </GridItem>
</Grid>