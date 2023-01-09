<script lang="ts">
import Box from "$lib/cards/Box.svelte"
import Card from "$lib/cards/Card.svelte"
import Heading from "$lib/display/Heading.svelte"
import Icon from "$lib/display/Icon.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { Props } from "$lib/utils/typed_props"
import type { SvelteComponent } from "svelte"

export let icon: typeof SvelteComponent
export let title: string
export let size: "small" | "large" = "small"
export let href: string | undefined = undefined
export let tag: Props<Tag>
export let description: string
$: disabled = href === undefined

</script>
<Card
    align_items="flex-start"
    {disabled}
    gap={size === "large" ? "16px" : "8px"}
    {href}
    padding={size === "large" ? "24px" : "16px"}>
    <Box
        align_items="center"
        direction="horizontal"
        gap="16px">
        <Icon
            color="brand"
            icon={icon}
            size={size === "large" ? 40 : 24} />
        <Box
            align_items="flex-start"
            gap="8px">
            <Heading level={3}>{ title }</Heading>
            {#if size === "large"}
                <Tag {...tag} />
            {/if}
        </Box>
    </Box>
    {#if size === "small"}
        <Tag {...tag} />
    {/if}
    <Paragraph>{ description }</Paragraph>
</Card>