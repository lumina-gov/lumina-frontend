<PageHead
    title="Sign in"
    description="Sign in to your Lumina account."
/>
<script lang="ts">
import Logo from "$lib/icons/Logo.svelte"
import Tag from "$lib/display/Tag.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Card from "$lib/cards/Card.svelte"
import Input from "$lib/controls/Input.svelte"
import Email from "svelte-material-icons/Email.svelte"
import Box from "$lib/cards/Box.svelte"
import Button from "$lib/controls/Button.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import Segment from "$lib/controls/Segment.svelte"
import Account from "svelte-material-icons/Account.svelte"
import Swap from "svelte-material-icons/SwapHorizontal.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import { MessageType } from "$lib/types/message"
import { set_cookie } from "$lib/utils/cookie"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import future from "$lib/utils/future"
import { goto } from "$app/navigation"
import type { PageData } from "./$types"
import { get_user } from "$lib/api/user"
import Password from "$lib/controls/Password.svelte"
import PageHead from "$lib/components/PageHead.svelte"

export let data: PageData

$: graph = data.graph
$: alerts = data.alerts

enum DisplayPage {
    Email,
    Password
}

let display = DisplayPage.Email
let loading = false

let user = {
    email: "",
    password: "",
}

async function signin () {
    let { data: { login: token }, errors } = await graph.req<{ login: string }>`message {
        login(${user})
    }`

    if (errors.length > 0) {
        errors.map((error: string) => alerts.create_alert(MessageType.Error, error))
        return
    }

    if(!token) return alerts.create_alert(MessageType.Error, "Invalid Login")

    set_cookie("token", token)
    data.graph.auth_token = token
    data.user_wrapper.user = await get_user(graph, alerts)

    alerts.create_alert(MessageType.Success, "Login Successful")

    await goto("/hub")
}


</script>

<div class="page">
    <div class="top-part">
        <Logo />
        <Tag color="brand">Sign In</Tag>
        <h1>
            One account. All of Lumina.
            <span class="icon h1-icon">
                <Settlement/>
            </span>
        </h1>
    </div>
    {#if loading}
        <OverlayLoading/>
    {/if}
    <Card padding="24px" max_width="550px">
        <Box max_width="360px" gap="20px">
            {#if display === DisplayPage.Email}
                <Input
                    type="email"
                    placeholder="Enter your email"
                    autocomplete="email"
                    left_icon={Email}
                    name="email"
                    focus_on_mount={true}
                    bind:value={user.email}
                    on:keyup={e => { if (e.key === "Enter" && user.email) display = DisplayPage.Password}}/>
                <Button
                    disabled={!user.email.includes("@")}
                    on:click={() => display = DisplayPage.Password}
                    right_icon={ChevronRight}>
                    Enter password
                </Button>
                <Button
                    style="translucent"
                    right_icon={Plus}
                    href="/onboarding">
                    Create Account
                </Button>
            {/if}
            {#if display === DisplayPage.Password}
                <div class="hidden">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        autocomplete="email"
                        left_icon={Email}
                        name="email"
                        focus_on_mount={true}
                        bind:value={user.email}
                        on:keyup={e => { if (e.key === "Enter" && user.email) display = DisplayPage.Password}}/>
                </div>
                <Segment
                    on:click={() => display = DisplayPage.Email}
                    left_icon={Account}
                    right_icon={Swap}
                    text={user.email}/>
                <Password
                    focus_on_mount={true}
                    on:keyup={e => { if (e.key === "Enter" && user.password) future(signin(), is_loading => loading = is_loading)}}
                    bind:value={user.password}/>
                <Button
                    disabled={!user.password}
                    on:click={() => future(signin(), is_loading => loading = is_loading)}
                    right_icon={ExitToApp}>
                    Sign In
                </Button>
            {/if}
        </Box>
    </Card>
</div>

<style lang="stylus">
@import 'variables'
.hidden
    display: none

.top-part
    display flex
    flex-direction column
    align-items center
    max-width 500px
    width: 100%
    gap 20px

h1
    margin 0
    display flex
    gap 10px
    align-items center
    font-weight 600

.icon
    display inline-flex

.h1-icon
    color $brand

.page
    padding 80px 20px
    display flex
    flex-direction column
    gap 40px
    align-items center

</style>
