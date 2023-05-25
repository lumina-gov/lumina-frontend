<script lang="ts">
    import Coloured from "$lib/display/Coloured.svelte";
    import Heading from "$lib/display/Heading.svelte";
    import Paragraph from "$lib/display/Paragraph.svelte";
    import Tag from "$lib/display/Tag.svelte";
    import Hero from "$lib/layouts/Hero.svelte";
    import NewspaperVariant from "svelte-material-icons/NewspaperVariant.svelte";
    import Button from "$lib/controls/Button.svelte";
    import Settlement from "$lib/icons/Settlement.svelte";

</script>


<Hero
    max_width="600px"
>
    <Tag>FUNCTIONAL SOCIETY</Tag>
    <Heading left_icon={NewspaperVariant}>RIGHTS AND <Coloured>DUTIES</Coloured></Heading>

    <Paragraph>Most governments give their citizens rights, but no duties.</Paragraph>
    <Paragraph>For example, Lumina believe that all citizens should have the right to vote on laws.
        However, for this to work, citizens have the duty of being an intelligent and independent free-thinker.
    </Paragraph>

    <Paragraph>
        For our society to function, it is your duty to fulfil your duties.</Paragraph>

        <Button
        href="/onboarding"
        style="translucent"
        hug={true}
        right_icon={Settlement}>
        Become a citizen
    </Button>
</Hero>