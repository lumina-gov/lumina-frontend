<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import Logo from "$lib/icons/Logo.svelte"
import NavLink from "./NavLink.svelte"
import LightUniversity from "$lib/icons/LightUniversity.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import HomeOutline from "svelte-material-icons/HomeOutline.svelte"
import Telescope from "svelte-material-icons/Telescope.svelte"
import FormatListBulleted from "svelte-material-icons/FormatListBulleted.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import NewspaperVariant from "svelte-material-icons/NewspaperVariant.svelte"
import ChevronDoubleLeft from "svelte-material-icons/ChevronDoubleLeft.svelte"
import type { MeQuery } from "$lib/graphql/graphql-types"
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/controls/Button.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import BellOutline from "svelte-material-icons/BellOutline.svelte"
import DonateButton from "./DonateButton.svelte"
import site_data from "$lib/data/site_data"
import Twitter from "svelte-material-icons/Twitter.svelte"
import Discord from "svelte-material-icons/Discord.svelte"
import TikTok from "$lib/icons/TikTok.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"

export let sidebar_opened: "default" | boolean
export let dropdown: "notifications" | "account" | null = null
export let user: MeQuery["me"]

function toggle(toggling: "notifications" | "account") {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}
</script>
<aside
    class:default={ sidebar_opened === "default" }
    class:visible={ sidebar_opened === true }>
    <nav class="content">
        <div class="top">
            <IconButton
                icon={ChevronDoubleLeft}
                on:click={ () => sidebar_opened = !sidebar_opened }/>
            <Logo/>
        </div>
        <div class="section">
            <NavLink
                href="/dashboard"
                left_icon={Apps}
                text="Dashboard"/>
        </div>
        <section class="section">
            <h4>Services</h4>
            <NavLink
                href="/citizenship"
                left_icon={Passport}
                text="Citizenship"/>
            <NavLink
                href="https://luminauniversity.earth"
                left_icon={LightUniversity}
                text="Lumina University"/>
        </section>
        <div class="section">
            <h4>Information</h4>
            <NavLink
                href="/"
                left_icon={HomeOutline}
                text="About Lumina"/>
            <NavLink
                href="/mission-and-vision"
                left_icon={Telescope}
                text="Mission & Vision"/>
            <NavLink
                href="/government-directory"
                left_icon={FormatListBulleted}
                text="Government Directory"/>
            <NavLink
                href="/milestones"
                left_icon={RocketLaunch}
                text="Milestones"/>
            <NavLink
                href="/media-and-press"
                left_icon={NewspaperVariant}
                text="Media & Press"/>
        </div>
    </nav>
    <div class="content">
        <div class="section">
            <div class="socials">
                <a
                    class="social-media-icon"
                    href={site_data.socials.twitter}><Twitter/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.discord}><Discord/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.tiktok}><TikTok/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.facebook}><Facebook/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.youtube}><Youtube/></a>
            </div>
        </div>
        <div class="section">
            <DonateButton/>
        </div>
        <div class="section">
            {#if user}
                <div class="auth-buttons space-between">
                    <ProfileButton
                        name="{user.first_name} {user.last_name}"
                        on:click={ () => toggle("account") }/>
                    <IconButton
                        icon={BellOutline}
                        on:click={ () => toggle("notifications") }/>
                </div>
            {:else}
                <div class="auth-buttons">
                    <Button
                        href="/auth"
                        hug={false}
                        right_icon={Settlement}>
                        Register
                    </Button>
                    <Button
                        style="translucent"
                        href="/auth"
                        hug={true}
                        right_icon={ExitToApp}/>
                </div>
            {/if}
        </div>
    </div>
</aside>

{#if sidebar_opened === true}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="scrim"
        on:click={ () => sidebar_opened = false }/>
{/if}
<style>
aside {
    width: 100%;
    max-width: 300px;
    flex: 1 0 auto;
    justify-content: space-between;
    flex-direction: column;
    display: none;
    background: var(--dark-app);
    z-index: 8;
    border-right: 2px solid rgba(var(--white-rgb), 0.1);

    &.visible {
        display: flex;

        @media (max-width: 900px) {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.4);
            border-right: none;
        }

        @media (max-width: 600px) {
            max-width: none;
            width: 100%;
        }
    }

    &.default {
        display: flex;
        @media (max-width: 900px) {
            display: none;
        }
    }
}

.scrim {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 7;
    display: none;
    @media (max-width: 900px) {
        display: block;
    }
}

.content {
    padding: 8px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .top {
        display: flex;
        gap: 8px;
        padding: 0 8px;
    }

    & .section {
        display: flex;
        padding: 0 8px;
        flex-direction: column;
    }
}

h4 {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    opacity: 0.3;
    padding-bottom: 8px;
}

.auth-buttons {
    display: flex;
    gap: 8px;

    &.space-between {
        justify-content: space-between;
    }
}

.socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    & .social-media-icon {
        display: inline-flex;
        font-size: 24px;
        color: white;
        opacity: 0.8;
        padding: 8px;
        border-radius: 4px;

        &:hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.08);
        }
    }
}
</style>