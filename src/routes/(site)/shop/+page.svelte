<PageHead
    title="Shop"
    description="Shop for our products"
    />
<script lang="ts">
    import Hero from "$lib/components/layouts/Hero.svelte"
    import PageHead from "$lib/components/PageHead.svelte"
    import Heading from "$lib/display/Heading.svelte"
    import Tag from "$lib/display/Tag.svelte"
    import TagOutline from "svelte-material-icons/TagOutline.svelte"
</script>
<Hero>
    <Heading level={1} left_icon={TagOutline}>Shop</Heading>
    <Tag color="brand">Coming Soon</Tag>
</Hero>