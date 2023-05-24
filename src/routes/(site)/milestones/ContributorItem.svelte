<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import type { MilestoneContributor } from "$lib/data/milestones"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Flex from "$lib/layouts/Flex.svelte"
export let contributor: MilestoneContributor
</script>

<Card>
    <Flex align_items="flex-start" >
        <Heading level={4}>{ contributor.name }</Heading>
    
        <Paragraph>{ contributor.description }</Paragraph>
    </Flex >
</Card>
