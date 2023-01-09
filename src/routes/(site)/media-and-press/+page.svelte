<PageHead
    description="Find media kits, information and press releases about Lumina - the City of the Future."
    title="Media & Press"
/>
<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import Button from "$lib/controls/Button.svelte"
import site_data from "$lib/data/site_data"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Tag from "$lib/display/Tag.svelte"
import Newspaper from "svelte-material-icons/Newspaper.svelte"
import Discord from "svelte-material-icons/Discord.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import Twitter from "svelte-material-icons/Twitter.svelte"
import TikTok from "$lib/icons/TikTok.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"
import Email from "svelte-material-icons/Email.svelte"
import { onMount, type SvelteComponent } from "svelte"
import Script from "svelte-material-icons/Script.svelte"
import Image from "svelte-material-icons/Image.svelte"
import Music from "svelte-material-icons/MusicNoteEighth.svelte"
import Icon from "$lib/display/Icon.svelte"
import Download from "svelte-material-icons/Download.svelte"
import type { PageData } from "./$types"
import PressReleaseLink from "./PressReleaseLink.svelte"

type Asset = {
    name: string
    url: string
    type: string
    icon: typeof SvelteComponent
}

export let data: PageData

export let assets: Asset[] = [
    {
        name: "Constitution of Lumina",
        url: "/media-kit/Constitution_Act.pdf",
        type: "PDF",
        icon: Script
    },
    {
        name: "Flag of Lumina",
        url: "/media-kit/Flag.png",
        type: "Image",
        icon: Image
    },
    {
        name: "Lumina Anthem",
        url: "/media-kit/National_Anthem.pdf",
        type: "PDF",
        icon: Music
    }
]

onMount(() => {
    console.log(data.press_releases)
})

</script>
<Hero gap={40}>
    <VerticalLayout max_width={500}>
        <Tag color="brand">For journalists</Tag>
        <Heading left_icon={Newspaper}>Media & Press</Heading>
        <Paragraph>
            Our media and press page offers a range of resources for journalists and members of the public.
        </Paragraph>
    </VerticalLayout>
    <Card
        align_items="flex-start"
        gap={16}
        padding="32px">
        <Heading
            level={2}
            underline={true}>Press Kit</Heading>
        <VerticalLayout max_width={500}>
            <Paragraph>
                A range of resources about the city of Lumina, including legal documents, official symbols, location information, demographic data, and more.
            </Paragraph>
            <div class="items">
                {#each assets as asset}
                    <a
                        class="asset"
                        download={asset.name}
                        href={asset.url}>
                        <div>
                            <Icon
                                color="white"
                                icon={asset.icon}
                                opacity={0.5}
                                size={24}/>
                            <div class="asset-title">
                                { asset.name }
                            </div>
                        </div>
                        <div>
                            <Tag color="brand">{ asset.type }</Tag>
                            <Icon
                                icon={Download}
                                size={24}/>
                        </div>
                    </a>
                {/each}
            </div>
        </VerticalLayout>
    </Card>
    <Card
        align_items="flex-start"
        gap={16}
        padding="32px">
        <Heading
            level={2}
            underline={true}>Contact Information</Heading>
        <VerticalLayout max_width={500}>
            <Paragraph>
                Find our official social media accounts, and contact details of our government.
                Media are invited to send media enquiries and request interviews.
                We attempt to reply to all media queries within 48 hours.
            </Paragraph>
        </VerticalLayout>
        <div class="flex-wrap">
            <Button
                style="translucent"
                href={site_data.socials.discord}
                hug={true}
                left_icon={Discord}/>
            <Button
                style="translucent"
                href={site_data.socials.facebook}
                hug={true}
                left_icon={Facebook}/>
            <Button
                style="translucent"
                href={site_data.socials.twitter}
                hug={true}
                left_icon={Twitter}/>
            <Button
                style="translucent"
                href={site_data.socials.tiktok}
                hug={true}
                left_icon={TikTok}/>
            <Button
                style="translucent"
                href={site_data.socials.youtube}
                hug={true}
                left_icon={Youtube}/>
            <Button
                style="translucent"
                href={"mailto:" + site_data.socials.email}
                hug={true}
                left_icon={Email}>{ site_data.socials.email }</Button>
        </div>
    </Card>
    <Card
        align_items="flex-start"
        gap={16}
        padding="32px">
        <Heading
            level={2}
            underline={true}>Press Releases</Heading>
        <VerticalLayout max_width={500}>
            <Paragraph>
                Here, you can find official statements and press releases issued by our government
                on a wide range of topics, including policy initiatives, government programs, and events.
            </Paragraph>
        </VerticalLayout>
        <div class="items">
            {#each data.press_releases as release}
                <PressReleaseLink
                    date={release.date}
                    tags={["Press Release"]}
                    title={release.title}
                    url={"/news/" + release.slug}
                />
            {/each}
        </div>
    </Card>
</Hero>
<style lang="stylus">
@import "variables"

.flex-wrap
    display flex
    flex-wrap wrap
    gap 8px

.items
    display flex
    flex-direction column
    width 100%
    gap 8px

.asset
    display flex
    gap 16px
    align-items center
    justify-content space-between
    width 100%
    padding 12px
    border-radius 4px
    background transparify(white, 4%)
    .asset-title
        color white
        font-size 14px
        font-weight 700
    > div
        display flex
        align-items center
        gap 8px
    &:hover
        background transparify(white, 8%)
</style>