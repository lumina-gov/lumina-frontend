<script lang="ts">
import Hub from "$lib/icons/Hub.svelte"
import Shop from "svelte-material-icons/TagOutline.svelte"
import Exit from "svelte-material-icons/ExitToApp.svelte"
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import ChevronUp from "svelte-material-icons/ChevronUp.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/buttons/Button.svelte"
import Logo from "$lib/icons/Logo.svelte"
import Menu from "svelte-material-icons/Menu.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import type { User } from "$lib/types/user"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"
import Inside from "$lib/controls/Inside.svelte"
import type { SvelteComponent } from "svelte"
import { all_links } from "$lib/components/hub/hub_data"
import type { HubType } from "$lib/types/HubType"
import { beforeNavigate } from "$app/navigation"
export let user: User | null

let menu_toggled: boolean | string = false

type MenuLink = {
    icon: typeof SvelteComponent
    name: string
    sublinks: HubType[]
} | {
    icon: typeof SvelteComponent
    name: string
    href: string
}

let links: MenuLink[] = [
    {
        icon: Hub,
        name: "Lumina Hub",
        sublinks: all_links
    },
    {
        icon: Shop,
        name: "Shop",
        href: "/shop"
    }
]

beforeNavigate(() => {
    menu_toggled = false
})

</script>
<header>
    <ClickoutRegion clicked_outside={() => menu_toggled = false}>
        <div class="inner-header">
            <nav class="left">
                <Logo/>
                <div class="desktop">
                    <Inside>
                        <Button style="transparent" on:click={() => menu_toggled = menu_toggled === "Lumina Hub"
                            ? false : "Lumina Hub"} right_icon={Hub}>
                            Hub
                        </Button>
                    </Inside>
                    <Button style="transparent" href="/shop" right_icon={Shop}>
                        Shop
                    </Button>
                </div>
            </nav>
            <nav class="right">
                {#if !user}
                    <div class="desktop">
                        <Button style="transparent" href="/signin" right_icon={Exit}>
                            Log In
                        </Button>
                    </div>
                    <div class="mobile">
                        <Button style="transparent" href="/signin" right_icon={Exit}/>
                    </div>
                    <Button href="/onboarding" right_icon={Settlement}>
                        Start
                    </Button>
                {:else}
                    <Button style="transparent" href="/dashboard" right_icon={Apps}>
                        Dashboard
                    </Button>
                {/if}
                <Inside>
                    <Button style="transparent" right_icon={Menu} on:click={() => menu_toggled = !menu_toggled}/>
                </Inside>
            </nav>
        </div>
        {#if menu_toggled}
            <Inside>
                <div class="menu">
                    <div class="mobile menu-links">
                        {#if !user}
                            <Button style="translucent" href="/signin" right_icon={Exit}>
                                Log In
                            </Button>
                            <Button href="/onboarding" right_icon={Settlement}>
                                Start
                            </Button>
                        {:else}
                            <Button style="translucent" href="/dashboard" right_icon={Apps}>
                                Dashboard
                            </Button>
                        {/if}
                    </div>
                    <nav>
                        {#each links as link}
                            <div class="menu-section">
                                <svelte:element
                                    this={"href" in link ? "a" : "div"}
                                    href={"href" in link ? link.href : undefined}
                                    class:toggled={menu_toggled === link.name}
                                    class="menu-link"
                                    on:click={() => {
                                        if ("sublinks" in link && link.name !== menu_toggled) {
                                            menu_toggled = link.name
                                        } else {
                                            menu_toggled = true
                                        }
                                    }}>
                                    <div class="link-icon">
                                        <svelte:component this={link.icon}/>
                                    </div>
                                    <div class="link-name">
                                        {link.name}
                                    </div>
                                    {#if "sublinks" in link}
                                        <div class="link-icon end">
                                            <svelte:component this={ menu_toggled === link.name ? ChevronUp : ChevronDown }/>
                                        </div>
                                    {/if}
                                </svelte:element>
                                {#if menu_toggled === link.name && "sublinks" in link}
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
                    </nav>
                </div>
            </Inside>
        {/if}
    </ClickoutRegion>
</header>

<style lang="stylus">
@import 'variables'

$mobile = 800px

header
    display flex
    justify-content center
    position sticky
    top 0
    z-index 8
    background $dark_app

.menu
    max-width 1200px
    border-radius 8px
    border 1px solid transparify(white, 8%)
    background mix(white, $dark_app, 4%)
    position absolute
    z-index 10
    width 100%
    top 100%
    margin 0 auto
    display flex
    flex-direction column
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
            &.end
                margin-left auto


.mobile
    display none
    align-items center
    gap 8px
    @media (max-width $mobile)
        display flex

.desktop
    display flex
    align-items center
    gap 8px
    @media (max-width $mobile)
        display none

.inner-header
    max-width 1200px
    width 100%
    display flex
    flex-direction row
    justify-content space-between
    align-items center
    padding 0px 16px
    height 64px
    nav
        display flex
        align-items center
        gap 8px
    .left
        display flex
        flex-direction row
        align-items center
        gap 36px


</style>