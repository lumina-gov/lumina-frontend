<PageHead
    description="Shop for our products"
    title="Shop"
/>
<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import TagOutline from "svelte-material-icons/TagOutline.svelte"
</script>
<Hero>
    <Heading
        left_icon={TagOutline}
        level={1}>Shop</Heading>
    <Tag color="brand">Coming Soon</Tag>
</Hero>