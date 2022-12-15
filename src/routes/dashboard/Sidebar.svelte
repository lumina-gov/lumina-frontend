<script lang="ts">
import IconButton from "$lib/buttons/IconButton.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import Lumina from "$lib/icons/Lumina.svelte"
import BellOutline from "svelte-material-icons/BellOutline.svelte"
import ProfileButton from "$lib/buttons/ProfileButton.svelte"
import NotificationsPopout from "./NotificationsPopout.svelte"
import AccountPopout from "./AccountPopout.svelte"
import Inside from "$lib/controls/Inside.svelte"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"
import type { User } from "$lib/types/user"

export let user: User

enum Dropdown {
    Notifications,
    Account,
}

let dropdown: Dropdown | null = null

function toggle(toggling: Dropdown) {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}

</script>
<div class="sidebar">
    <div class="section">
        <IconButton href="/" icon={Lumina} opacity={false}/>
        <div class="div"/>
        <IconButton href="/dashboard" icon={Apps}/>
    </div>
    <ClickoutRegion condition={dropdown != null} clicked_outside={() => dropdown = null}>
        <div class="section">
            <Inside>
                <IconButton
                icon={BellOutline}
                on:click={() => toggle(Dropdown.Notifications)}/>
            </Inside>
            <div class="div"/>
            <Inside>
                <ProfileButton
                    on:click={() => toggle(Dropdown.Account)}/>
            </Inside>
        </div>
        {#if dropdown !== null}
            <Inside>
                <div class="out-of-sidebar">
                    {#if dropdown === Dropdown.Notifications}
                        <NotificationsPopout/>
                    {/if}
                    {#if dropdown === Dropdown.Account}
                        <AccountPopout bind:user/>
                    {/if}
                </div>
            </Inside>
        {/if}
    </ClickoutRegion>
</div>
<style lang="stylus">
@import 'variables'

.sidebar
    display flex
    background transparify(white, 12%)
    width 60px
    flex-direction column
    padding 8px 0
    justify-content space-between
    position relative
    z-index 20
    @media (max-width $mobile)
        margin-left -60px
        position fixed
        left 0
        top 0
        bottom 0

.div
    height 1px
    width 50%
    background transparify(white, 12%)

.section
    display flex
    justify-content center
    flex-direction column
    gap 8px
    align-items center

.out-of-sidebar
    max-width 300px
    width 100vw
    position absolute
    bottom 16px
    z-index 10
    left calc(100% \+ 16px)

</style>