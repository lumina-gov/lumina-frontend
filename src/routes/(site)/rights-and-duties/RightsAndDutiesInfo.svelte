<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import InformationOutline from "svelte-material-icons/InformationOutline.svelte"
</script>

<div class="info_grid">
    <div
        style={"grid-area: top;"}
        class="info_card">
        <Heading
            left_icon={InformationOutline}
            left_icon_color={"white"}
            level={3}
            underline={true}>About your rights and duties.</Heading>
        <Paragraph
        >In Lumina, we strive to provide citizens with many rights, as well
            duties they need to fulfill in order to maintain order in society.</Paragraph
        >

        <Paragraph
        >We strive to ensure that all rights for citizens are actually
            provided to citizens, as some rights require active fulfillment (eg:
            right to education).
        </Paragraph>
        <Paragraph
        >There are two types of rights, rights that oblige either inaction
            (negative rights), or action (positive rights). Some examples of
            both rights below.
        </Paragraph>
    </div>
    <div
        style={"grid-area: left;"}
        class="info_card left">1</div>
    <div
        style={"grid-area: right;"}
        class="info_card right">2</div>
</div>

<style lang="stylus">
    @import 'variables'
.info_grid
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    border-radius 8px
    background $dark_app
    display grid
    max-height 486px
    max-width 1000px
    grid-template-columns 500px 500px
    grid-template-rows 262px 224px
    grid-template-areas "top top" "left right"
    border 1px solid rgba(255, 255, 255, 0.05)
.info_card
    width 100%
    height:100%
.info_card&.left
    border-top 1px solid rgba(255, 255, 255, 0.1)
.info_card&.right
    border-top 1px solid rgba(255, 255, 255, 0.1)
    border-left 1px solid rgba(255, 255, 255, 0.1)
</style>
