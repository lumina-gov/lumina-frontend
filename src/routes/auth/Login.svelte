<script lang="ts">
import Box from "$lib/cards/Box.svelte"
import Card from "$lib/cards/Card.svelte"
import Input from "$lib/controls/Input.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import { MessageType } from "$lib/types/message"
import { page } from "$app/stores"
import { LoginDocument } from "$lib/graphql/graphql-types"
import { set_cookie } from "$lib/utils/cookie"
import { invalidateAll } from "$app/navigation"
import Button from "$lib/controls/Button.svelte"
import Email from "svelte-material-icons/Email.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Account from "svelte-material-icons/Account.svelte"
import SwapHorizontal from "svelte-material-icons/SwapHorizontal.svelte"
import future from "$lib/utils/future"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import Password from "$lib/controls/Password.svelte"
import Segment from "$lib/controls/Segment.svelte"
import Icon from "$lib/display/Icon.svelte"
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"
import Web from "svelte-material-icons/Web.svelte"
import { createEventDispatcher } from "svelte"

enum DisplayPage {
    Email,
    Password
}

let dispatch = createEventDispatcher<{ next: void }>()
let display = DisplayPage.Email
let loading = false

let user = {
    email: "",
    password: "",
}

async function signin () {
    let { data, error} = await $page.data.graph.gmutation(LoginDocument, {
        email: user.email,
        password: user.password
    })

    if (error || !data) {
        $page.data.alerts.create_alert(MessageType.Error, error?.message ?? "Login failed")
    } else {
        $page.data.alerts.create_alert(MessageType.Success, "Login Successful")
        set_cookie("token", data.auth_token)
        await invalidateAll()
        dispatch("next")
    }
}

</script>
{#if loading}
    <OverlayLoading/>
{/if}
<Card padding="24px">
    <Box
        gap="20px"
        max_width="360px">
        <h1>
            <Icon
                color="brand"
                icon={ShieldAccount}
                size={32}/>
            Login
        </h1>
        {#if display === DisplayPage.Email}
            <Input
                name="email"
                autocomplete="email"
                focus_on_mount={true}
                left_icon={Email}
                placeholder="Enter your email"
                type="email"
                bind:value={ user.email }
                on:keyup={ e => { if (e.key === "Enter" && user.email) display = DisplayPage.Password} }/>
            <Button
                disabled={!user.email.includes("@")}
                right_icon={ChevronRight}
                on:click={ () => display = DisplayPage.Password }>
                Enter password
            </Button>
        {/if}
        {#if display === DisplayPage.Password}
            <div class="hidden">
                <Input
                    name="email"
                    autocomplete="email"
                    type="email"
                    bind:value={ user.email }/>
            </div>
            <div class="segment">
                <Segment
                    left_icon={Account}
                    right_icon={SwapHorizontal}
                    text={user.email}
                    on:click={ () => display = DisplayPage.Email }/>
            </div>
            <Password
                focus_on_mount={true}
                on:keyup={ e => { if (e.key === "Enter" && user.password) future(signin(), is_loading => loading = is_loading)} }
                bind:value={ user.password }/>
            <Button
                disabled={!user.password}
                right_icon={ExitToApp}
                on:click={ () => future(signin(), is_loading => loading = is_loading) }>
                Sign In
            </Button>
        {/if}
    </Box>
</Card>
<div class="security">
    <span>Protect yourself from phishing attacks. Always check that you are on:</span>
    <div class="browser">
        <Icon
            icon={Web}
            opacity={0.5}/>
        <div class="url">
            https://lumina.earth
        </div>
    </div>
</div>
<style lang="stylus">
@import 'variables'
.hidden
    display: none

.segment
    display flex
    justify-content center

.security
    display flex
    flex-direction column
    align-items center
    span
        opacity 0.6
        text-align center

.browser
    display inline-flex
    align-items center
    gap 12px
    margin-top 10px
    background transparify(white, 6%)
    padding 10px
    border-radius 4px

h1
    margin 0
    gap 10px
    text-align center
    display flex
    font-size: 28px
    align-items center
    justify-content center
    font-weight 600

</style>