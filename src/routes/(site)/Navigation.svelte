<script lang="ts">
import { all_links } from "$lib/data/hub_data"
import type { HubType } from "$lib/types/HubType"
import type { User } from "$lib/types/user"
import type { SvelteComponent } from "svelte"
import Hub from "$lib/icons/Hub.svelte"
import Shop from "svelte-material-icons/TagOutline.svelte"
import site_data from "$lib/data/site_data"
import Discord from "svelte-material-icons/Discord.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import Twitter from "svelte-material-icons/Twitter.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"
import TikTok from "$lib/icons/TikTok.svelte"
import { afterNavigate } from "$app/navigation"
export let user: User | null
export let nav_opened: boolean

type MenuLink = {
    icon: typeof SvelteComponent
    name: string
    href: string
    sublinks?: HubType[]
}

let links: MenuLink[] = [
    {
        icon: Hub,
        name: "Lumina Hub",
        href: "/",
        sublinks: all_links
    },
    {
        icon: Shop,
        name: "Shop",
        href: "/shop"
    }
]

$: authenticated = user != null

afterNavigate(() => {
    nav_opened = false
})


let wrapper: HTMLDivElement
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    bind:this={wrapper}
    on:click={e => e.target === wrapper ? nav_opened = false : null}
    class="nav-wrapper"
    class:nav_opened
    class:authenticated>
    <nav>
        {#each links as link}
            <div class="menu-section">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <a
                    href={link.href}
                    class="menu-link">
                    <div class="link-icon">
                        <svelte:component this={link.icon}/>
                    </div>
                    <div class="link-name">
                        {link.name}
                    </div>
                </a>
                {#if link.sublinks}
                    <div class="menu-sublinks">
                        {#each link.sublinks as sublink}
                            <a
                                href={sublink.link}
                                class:disabled={!sublink.link}
                                class="menu-sublink">
                                <div class="menu-sublink-icon {sublink.tag.color}">
                                    <svelte:component this={sublink.title.icon}/>
                                </div>
                                <div class="info">
                                    <div class="menu-sublink-name">
                                        {sublink.title.text}
                                    </div>
                                    <div class="description">
                                        {sublink.description}
                                    </div>
                                </div>
                            </a>
                        {/each}
                    </div>
                {/if}
            </div>
        {/each}
        <div class="socials">
            <a href={site_data.socials.twitter} class="social-media-icon"><Twitter/></a>
            <a href={site_data.socials.discord} class="social-media-icon"><Discord/></a>
            <a href={site_data.socials.tiktok} class="social-media-icon"><TikTok/></a>
            <a href={site_data.socials.facebook} class="social-media-icon"><Facebook/></a>
            <a href={site_data.socials.youtube} class="social-media-icon"><Youtube/></a>
        </div>
    </nav>
</div>
<style lang="stylus">
@import "variables"

.socials
    display flex
    align-items center
    justify-content center
    gap 8px
    padding 16px
    .social-media-icon
        display inline-flex
        font-size 24px
        color white
        opacity 0.8
        padding 8px
        border-radius 4px
        &:hover
            opacity 1
            background transparify(white, 4%)


.menu-links
    padding 16px
    gap 16px
    border-bottom 1px solid transparify(white, 8%)
.menu-sublinks
    display grid
    grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
    padding 8px
    .menu-sublink
        display flex
        align-items flex-start
        gap 12px
        color white
        padding 12px
        opacity 0.5
        border-radius 4px
        cursor default
        &:not(.disabled)
            opacity 1
            cursor pointer
            &:hover
                background transparify(white, 4%)
        .menu-sublink-icon
            padding 6px
            display inline-flex
            font-size 18px
            border-radius 40px
            &.brand
                background transparify($brand, 8%)
                color $brand
            &.red
                background transparify($red, 8%)
                color $red
            &.green
                background transparify($green, 8%)
                color $green
            &.blue
                background transparify($blue, 8%)
                color $blue
            &.yellow
                background transparify($yellow, 8%)
                color $yellow
            &.white
                background transparify(white, 8%)
                color white
        .info
            gap 8px
            display flex
            flex-direction column
        .menu-sublink-name
            font-size 15px
            font-weight 600
        .description
            font-size 12px
            font-weight 500
            opacity 0.5
.menu-section
    border-bottom 1px solid transparify(white, 8%)
    display flex
    flex-direction column
    &:last-child
        border-bottom 0
.menu-link
    display flex
    align-items center
    cursor pointer
    color white
    gap 8px
    padding 16px
    &:hover
        background transparify(white, 4%)
    font-size 18px
    font-weight 600
    .link-icon
        color $brand
        display inline-flex
        font-size 24px

.nav-wrapper
    position fixed
    nav
        background transparify(mix($dark_app, white, 94%), 90%)
        background-blur(10px)
        box-shadow 0 0 8px 0 rgba(0, 0, 0, 0.5)
        overflow-y auto
    display flex
    flex-direction column
    @media (min-width $tablet)
        z-index 40
        transition top 0.3s ease-in-out
        top 100%
        nav
            max-width 1200px
            margin 0 auto
            width 100%
            border-radius 16px
            height 50%
            box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        &.nav_opened
            z-index 40
            top 60px
        width 100%

    @media (max-width $tablet)
        nav
            width 100%
            height 100%
            box-shadow 4px 0 8px 0 rgba(0, 0, 0, 0.4)
        z-index 40
        transition left 0.2s ease-in-out
        width 100%
        top 0
        left -100%
        &.nav_opened
            left 0
        &.authenticated
            bottom 60px
            top 0
        &:not(.authenticated)
            top 60px
            bottom 0

</style>