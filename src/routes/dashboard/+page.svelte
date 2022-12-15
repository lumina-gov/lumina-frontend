<script lang="ts">
import Settlement from "$lib/icons/Settlement.svelte"
import Logo from "$lib/icons/Logo.svelte"
import Button from "$lib/buttons/Button.svelte"
import Copy from "svelte-material-icons/ContentCopy.svelte"
import Info from "svelte-material-icons/InformationOutline.svelte"
import Box from "$lib/cards/Box.svelte"
import { MessageType } from "$lib/types/message"
import AppCard from "$lib/cards/AppCard.svelte"
import PassportBiometric from "svelte-material-icons/PassportBiometric.svelte"
import type { SvelteComponent } from "svelte"
import type { Prop } from "$lib/utils/typed_props"
import Discord from "svelte-material-icons/Discord.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
import Bank from "svelte-material-icons/Bank.svelte"
import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"
import type { PageData } from "./$types"
import Heading from "$lib/display/Heading.svelte"

export let data: PageData

$: user_has_citizenship_application = data.user_wrapper.user.citizenship_status === "pending"

async function copy_referral_link() {
    let text = `https://${window.location.host}/onboarding?referral=${data.user_wrapper.user._id}`
    await navigator.clipboard.writeText(text)
    data.alerts.create_alert(MessageType.Success, "Invite link copied")
}

let left_cards: {
    title: string,
    icon: typeof SvelteComponent
    href?: string
    description: string
    tag?: Prop<AppCard, "tag">,
    disabled: boolean
}[] = [
    user_has_citizenship_application ? {
        title: "Become a citizen",
        description: "Sign up to become a citizen of Lumina here.",
        icon: PassportBiometric,
        href: "/dashboard/citizenship",
        tag: {
            text: "RECOMMENDED",
            color: "brand",
        },
        disabled: false,
    } : {
        title: "Citizen Application Status",
        description: "View your citizenship application status here.",
        icon: PassportBiometric,
        href: "/dashboard/citizenship/status",
        tag: {
            text: "PENDING",
            color: "yellow",
        },
        disabled: false,
    },
    {
        title: "Join the Discord",
        description: "If you've got questions or are interested in contributing, come chat on our community Discord server.",
        icon: Discord,
        href: "https://discord.gg/r4vNcUKktT",
        tag: {
            text: "RECOMMENDED",
            color: "brand",
        },
        disabled: false,
    },
    {
        title: "Register a business",
        description: "Create an organisation in Lumina online in a few minutes..",
        icon: Domain,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    },
    {
        title: "Job board",
        description: "Find a job. Get involved with helping at Lumina.",
        icon: HumanGreetingVariant,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    },
    {
        title: "Create a bank account",
        description: "Set up a new bank account to start getting paid Luna.",
        icon: Bank,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    },
]

let right_cards: {
    title: string,
    icon: typeof SvelteComponent
    href?: string
    description: string
    tag?: Prop<AppCard, "tag">,
    disabled: boolean
}[] = [
    {
        title: "Read the Lumina Accords",
        description: "A short infographic novel about the changing world order, and why we need a new system of governance. The high level plan and ideas behind implementing Lumina.",
        icon: Info,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    },
    {
        title: "Legislation",
        description: "A collection of the constitution, laws and regulations that are currently in effect in Lumina.",
        icon: Info,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    },
    {
        title: "Roadmap",
        description: "View a roadmap of the future of Lumina.",
        icon: Info,
        tag: {
            text: "COMING SOON",
            color: "white",
        },
        disabled: true,
    }
]

</script>
<div class="wrapper">
    <div class="area">
        <Logo/>
        <Heading right_icon={Settlement}>Hi, { data.user_wrapper.user.first_name }</Heading>
        <div class="referral">
            <Heading level={3}>User Referrals</Heading>
            <div class="description">Earn 50Ł per citizen referred (Lumina's currency, Luna)</div>
            <Heading level={2}>{data.user_wrapper.user.referrals} Users</Heading>
            <Box padding={false} max_width="250px">
                <Button on:click={copy_referral_link}
                    left_icon={Copy}
                    style="translucent">Copy referral link</Button>
            </Box>
        </div>
        <Box gap="16px">
            {#each left_cards as left_card}
                <AppCard
                    title={left_card.title}
                    description={left_card.description}
                    icon={left_card.icon}
                    tag={left_card.tag}
                    href={left_card.href}
                    disabled={left_card.disabled}
                />
            {/each}
        </Box>
    </div>
    <div class="area light">
        <Heading right_icon={Info} level={2}>Information Hub</Heading>
        <Box gap="16px">
            {#each right_cards as right_card}
                <AppCard
                    title={right_card.title}
                    description={right_card.description}
                    icon={right_card.icon}
                    tag={right_card.tag}
                    href={right_card.href}
                    disabled={right_card.disabled}
                />
            {/each}
        </Box>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.wrapper
    display grid
    grid-template-columns 1fr 1fr
    height 100%
    @media (max-width 1100px)
        grid-template-columns 1fr

.referral
    display flex
    flex-direction column
    gap 8px
    .description
        opacity 0.5

.area
    padding 40px
    gap 32px
    display flex
    flex-direction column
    overflow-y auto
    flex 1
    &.light
        background transparify(white, 4%)
    @media (max-width 1100px)
        overflow-y initial
        padding 24px
</style>