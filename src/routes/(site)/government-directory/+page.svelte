<PageHead
    description="Find information about government agencies, departments, and elected officials."
    title="Government Directory"/>
<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Tag from "$lib/display/Tag.svelte"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import BulletedList from "svelte-material-icons/FormatListBulletedSquare.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import Card from "$lib/cards/Card.svelte"
import type { PageData } from "./$types"
import DirectoryList from "./DirectoryList.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Segment from "$lib/controls/Segment.svelte"
import DotsCircle from "svelte-material-icons/DotsCircle.svelte"
import MenuDown from "svelte-material-icons/MenuDown.svelte"
import Sidebar from "./Sidebar.svelte"
import Box from "$lib/cards/Box.svelte"
import Government from "svelte-material-icons/Bank.svelte"

export let data: PageData

let org_types: {
    name: string,
    description: string,
}[] = [
    {
        name: "Agency",
        description: "A government organisation that is responsible for a specific function. Agencies are usually headed by a director.",
    },
    {
        name: "Department",
        description: "A division of government that is responsible for a specific area of government. Departments are usually headed by a president",
    },
    {
        name: "Commmittee",
        description: "A group of individuals appointed or elected to consider, investigate and report on a specific issue.",
    },
    {
        name: "Authority",
        description: "An organisation with the power to enforce rules or regulations within a specific area",
    },
    {
        name: "Institution",
        description: "An organisation, typically for the purpose of research or education, that is established by a government or other authority.",
    },
    {
        name: "Corporation",
        description: "A company or group of people authorised to act as a single entity and recognised as such in law, headed by a director",
    }

]

</script>

<Hero
    gap={80}
    max_width="1200px">
    <VerticalLayout
        align_items="flex-start"
        max_width={500}>
        <Tag color="brand">Official Resource</Tag>
        <Heading left_icon={BulletedList}>Government Directory</Heading>
        <Paragraph>
            Your guide to the structures, organisations and key people in the government of Lumina.
        </Paragraph>
    </VerticalLayout>
    <Grid
        columns={{
            mobile: 4,
            tablet: 8,
            laptop: 12
        }}
        horizontal_gap={40}
        side_padding={false}
        vertical_gap={80}>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 3",
                laptop: "span 4",
            }}
            flex_direction="column"
            gap={80}>
            <Sidebar
                items={[
                    { name: "Core Institutions", href: "#core" },
                    { name: "Government Structures", href: "#structures" },
                    { name: "Directory", href: "#directory" },
                ]}/>
        </GridItem>
        <GridItem
            columns={{
                mobile: "span 4",
                tablet: "span 5",
                laptop: "span 8",
            }}
            flex_direction="column"
            gap={80}>

            <VerticalLayout align_items="flex-start">
                <Heading
                    id="core"
                    level={2}
                    underline={true}>Core Institutions</Heading>
                <VerticalLayout max_width={500}>
                    <Paragraph>
                        A highlight of the most essential and fundamental organisations that play a crucial role in the functioning of the government.
                    </Paragraph>
                </VerticalLayout>
                <ResponsiveLayout
                    align_items="stretch"
                    min_item_size={220}>
                    {#each data.core_orgs as org}
                        <Card
                            align_items="flex-start"
                            gap={16}
                            justify_content="space-between"
                            padding="16px">
                            <VerticalLayout gap={8}>
                                <Heading
                                    left_icon={Government}
                                    level={4}>{ org.name }</Heading>
                                <Paragraph>
                                    { org.description }
                                </Paragraph>
                            </VerticalLayout>
                            <div class="tags">
                                <Tag color="brand">{ org.type }</Tag>
                                <Tag
                                    color={org.status === "Halted" ? "white" : "green"}
                                    opacity={org.status === "Halted"}>{ org.status }</Tag>
                            </div>
                        </Card>
                    {/each}
                </ResponsiveLayout>
            </VerticalLayout>
            <VerticalLayout align_items="flex-start">
                <Heading
                    id="structures"
                    level={2}
                    underline={true}>Government Structures</Heading>
                <VerticalLayout max_width={500}>
                    <Paragraph>
                        Descriptions of the various types of government entities.
                    </Paragraph>
                </VerticalLayout>
                <Card padding="16px">
                    <ResponsiveLayout
                        align_items="stretch"
                        gap={32}
                        min_item_size={220}>
                        {#each org_types as type}
                            <Box gap="16px">
                                <VerticalLayout
                                    align_items="flex-start"
                                    gap={8}>
                                    <Tag>{ type.name }</Tag>
                                    <Paragraph>
                                        { type.description }
                                    </Paragraph>
                                </VerticalLayout>
                            </Box>
                        {/each}
                    </ResponsiveLayout>
                </Card>
            </VerticalLayout>
            <VerticalLayout align_items="flex-start">
                <Heading
                    id="directory"
                    level={2}
                    underline={true}>Directory</Heading>
                <VerticalLayout max_width={500}>
                    <Paragraph>
                        A comprehensive list of all government entities
                        <!-- , you an filter the list by type,
                        and status and view detailed information about each entity by clicking on it to learn more. -->
                    </Paragraph>
                </VerticalLayout>
                <FlexWrap>
                    <Segment
                        disabled={true}
                        left_icon={BulletedList}
                        right_icon={MenuDown}>Type</Segment>
                    <Segment
                        disabled={true}
                        left_icon={DotsCircle}
                        right_icon={MenuDown}>Status</Segment>
                </FlexWrap>
                <DirectoryList organisations={data.organisations}/>
            </VerticalLayout>
        </GridItem>

    </Grid>
</Hero>