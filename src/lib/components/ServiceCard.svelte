<script lang="ts">
import Box from "$lib/cards/Box.svelte"
import Card from "$lib/cards/Card.svelte"
import Heading from "$lib/display/Heading.svelte"
import Icon from "$lib/display/Icon.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Tag from "$lib/display/Tag.svelte"
import type { Props } from "$lib/utils/typed_props"

import type { IconComponent } from "$lib/utils/icon_type"

export let icon: IconComponent
export let title: string
export let size: "small" | "large" = "small"
export let href: string | undefined = undefined
export let tag: Props<Tag> & { color: string }
export let description: string
export let reset_bg = false
$: disabled = href === undefined

</script>
<Card
    align_items="flex-start"
    {disabled}
    gap={size === "large" ? "16px" : "8px"}
    {href}
    padding={size === "large" ? "24px" : "16px"}
    reset_bg={reset_bg}>
    <Box
        align_items="center"
        direction="horizontal"
        gap="16px">
        <Icon
            --color="var(--brand)"
            --size="{size === "large" ? 40 : 24}px"
            icon={icon} />
        <Box
            align_items="flex-start"
            gap="8px">
            <Heading level={3}>{ title }</Heading>
            {#if size === "large"}
                <Tag
                    {...tag}
                    --color={tag.color} />
            {/if}
        </Box>
    </Box>
    {#if size === "small"}
        <Tag
            {...tag}
            --color={tag.color} />
    {/if}
    <Paragraph>{ description }</Paragraph>
</Card>