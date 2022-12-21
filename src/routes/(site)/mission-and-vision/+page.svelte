<PageHead
    title="Mission and vision"
    description="Empowering every individual to have a direct say in the decision-making processes that affect their lives."
    type="article"
/>
<script lang="ts">
import Hero from "$lib/components/layouts/Hero.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Beacon from "./Beacon.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import ResponsiveLayout from "$lib/components/layouts/ResponsiveLayout.svelte"
import Card from "$lib/cards/Card.svelte"
import UnresponsiveLayout from "$lib/components/layouts/VerticalLayout.svelte"
import type { SvelteComponent } from "svelte"
import FeatureTile from "$lib/components/FeatureTile.svelte"

import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"
import CheckboxMarkedCircleOutline from "svelte-material-icons/CheckboxMarkedCircleOutline.svelte"
import CircleHalfFull from "svelte-material-icons/CircleHalfFull.svelte"
import ShieldCheck from "svelte-material-icons/ShieldCheck.svelte"
import Leaf from "svelte-material-icons/Leaf.svelte"
import Crane from "svelte-material-icons/Crane.svelte"
import Scale from "svelte-material-icons/ScaleBalance.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import BookOpenVariant from "svelte-material-icons/BookOpenVariant.svelte"
import PageHead from "$lib/components/PageHead.svelte"

type Goal = {
    title: string,
    description: string,
    icon: typeof SvelteComponent
}


let goals: Goal[] = [
    {
        title: "Citizen-led governance",
        description: "Empowering every individual to have a direct say in the decision-making processes that affect their lives.",
        icon: HumanGreetingVariant
    },
    {
        title: "Excellence",
        description: "Consistently delivering high-quality services and programs to the citizens of Lumina.",
        icon: CheckboxMarkedCircleOutline
    },
    {
        title: "Transparency",
        description: "Open and transparent communication, including the sharing of information and decision-making processes with the public.",
        icon: CircleHalfFull
    },
    {
        title: "Accountability",
        description: "Being accountable to the citizens of Lumina and upholding the highest standards of integrity and honesty.",
        icon: ShieldCheck
    },
    {
        title: "Sustainability",
        description: "Preserving and protecting the natural environment, as well as promoting sustainable economic development.",
        icon: Leaf
    },
    {
        title: "Strong foundations",
        description: "Building a strong and resilient foundation for the future of Lumina, including culture, infrastructure, public services, rights and values.",
        icon: Crane
    },
    {
        title: "Rights & Freedoms",
        description: "Upholding and protecting the rights and freedoms of all citizens of Lumina, and serving as a viable model for other states to adopt our vision.",
        icon: Scale
    },
    {
        title: "Innovation",
        description: "Fostering innovation and creativity in all areas of government and society, including the development of new technologies and approaches to problem-solving.",
        icon: RocketLaunch
    },
    {
        title: "Education",
        description: "Ensuring all citizens have access to high-quality education so that the populace can intelligently guide the future of our city.",
        icon: BookOpenVariant
    },
]
</script>

<Hero
    vertical_padding={48}
    align="center"
    gap={32}>
    <Beacon/>
    <Tag>OUR CORE DIFFERENCE</Tag>
    <Heading left_icon={Scale}>Mission and <Coloured>Vision</Coloured></Heading>
    <UnresponsiveLayout max_width="600px" text_align="center">
        <Paragraph>
            We want Lumina to be a beacon of hope and progress, inspiring other cities and nations
            to embrace the principles of direct democracy and collaborative governance.
        </Paragraph>
    </UnresponsiveLayout>
    <ResponsiveLayout max_width={1000} text_align="center" min_item_size={300}>
        <Card direction="vertical" gap={16} padding="32px" shadow={true}>
            <Heading level={2} underline={true}>Our mission</Heading>
            <Paragraph>
                Our mission is to build a city that is grounded in the principles of direct democracy,
                empowering its residents to participate in the decision-making process and to shape their own future
            </Paragraph>
        </Card>
        <Card direction="vertical" gap="16px" padding="32px" shadow={true}>
            <Heading level={2} underline={true}>Our vision</Heading>
            <Paragraph>
                Our vision is to create a vibrant and dynamic city-state where our citizens
                have the power to shape their own future through direct democracy and the use of cutting-edge technology
            </Paragraph>
        </Card>
    </ResponsiveLayout>
</Hero>
<Hero vertical_padding={40} translucent={true} gap={40}>
    <UnresponsiveLayout text_align="center" max_width={600} align_items="center" margin_auto={true}>
        <Heading level={2} underline={true}>Goals & Commitments</Heading>
        <Paragraph>
            We are dedicated to building a city-state that meets the needs and aspirations of our citizens
        </Paragraph>
    </UnresponsiveLayout>
    <ResponsiveLayout max_width={1200} min_item_size={300} vertical_gap={48} horizontal_gap={32} vertical_padding={16}>
        {#each goals as goal}
            <FeatureTile
                title={goal.title}
                description={goal.description}
                icon={goal.icon}/>
        {/each}
    </ResponsiveLayout>
</Hero>