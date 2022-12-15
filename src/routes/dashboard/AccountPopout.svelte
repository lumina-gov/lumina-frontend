<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Settings from "svelte-material-icons/Cog.svelte"
import Icon from "$lib/display/Icon.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import Profile from "$lib/display/Profile.svelte"
import type { User } from "$lib/types/user"
import { page } from "$app/stores"
import { delete_cookie } from "$lib/utils/cookie"
import { goto } from "$app/navigation"

export let user: User
$: name = `${user.first_name} ${user.last_name}`
$: email = user.email

$: data = $page.data

async function logout() {
    data.graph.auth_token = null
    data.user_wrapper.user = null

    delete_cookie("token")
    await goto("/signin")
}

</script>
<Card
    reset_bg={true}>
    <div class="account">
        <Profile size=48px/>
        <div class="data">
            <span class="name">
                {name}
            </span>
            <span class="email">
                {email}
            </span>
        </div>
    </div>
    <div class="links">
        <a class="link" href="/dashboard/account">
            <Icon icon={Settings} size={20}/>
            <span>
                Account Settings
            </span>
        </a>
        <div class="link red" on:click={logout}>
            <Icon icon={ExitToApp} size={20}/>
            <span>
                Log Out
            </span>
        </div>
    </div>
</Card>
<style lang="stylus">
@import 'variables'

.account
    border-bottom 1px solid transparify(white, 12%)
    padding 16px
    width 100%
    display flex
    align-items center
    gap 8px
    .data
        display flex
        flex-direction column
        gap 8px
        line-height 1
        .name
            font-size 18px
            font-weight 500
        .email
            font-size 14px
            font-weight 500
            opacity 0.5

.links
    width 100%
    display flex
    flex-direction column
    padding 8px
    gap 0px

.link
    display flex
    align-items center
    gap 8px
    padding 8px
    width 100%
    border-radius 4px
    cursor pointer
    color white
    font-size 16px
    font-weight 600
    opacity 0.5
    &:hover
        opacity 1
        background transparify(white, 8%)
    &.red
        color $red
        opacity 1
        &:hover
            color lighten($red, 20%)
</style>