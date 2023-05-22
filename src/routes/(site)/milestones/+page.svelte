<script lang="ts">
    import Hero from "$lib/layouts/Hero.svelte"
    import Heading from "$lib/display/Heading.svelte"
    import Tag from "$lib/display/Tag.svelte";
    import Paragraph from "$lib/display/Paragraph.svelte";

</script>

<Hero
    gap={32}
    vertical_padding={48}>
    <Tag>OUR HISTORY</Tag>
    <Heading>
        MILESTONES
    </Heading>
    <Paragraph>
        View the milestones and history of the development of Lumina <br> 
        leading up to where we are today. <br>
        <br>
        Learn about the key contributors and pioneers moving Lumina  <br>
        twoards fulfilling its vision of creating  a free and directly <br> 
        democratic city-state.
    </Paragraph>
    </Hero>