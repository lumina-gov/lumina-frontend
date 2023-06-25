<PageHead
    description="Access Lumina services with your Lumina account"
    title="Auth Portal"
/>
<script lang="ts">
import AuthorisationInfo from "./AuthorisationInfo.svelte"
import Tag from "$lib/display/Tag.svelte"
import Logo from "$lib/icons/Logo.svelte"
import Authorize from "./Authorize.svelte"
import CreateAccount from "./CreateAccount.svelte"
import Login from "./Login.svelte"
import Select from "./Select.svelte"
import Button from "$lib/controls/Button.svelte"
import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte"
import { page } from "$app/stores"
import { goto, invalidateAll } from "$app/navigation"
import PageHead from "$lib/components/PageHead.svelte"
import { onMount } from "svelte"
import ForgotPassword from "./ForgotPassword.svelte"

export let data

let auth_page = "select"

$: user = data.user_store.user

async function next() {
    if (data.app_info){
        auth_page = "authorize"
    } else {
        await invalidateAll()
        // we are authenticated
        let redirect = $page.url.searchParams.get("redirect")
        await goto(redirect ?? "/")
    }
}

onMount(() => {
    let referral = $page.url.searchParams.get("referral")
    $page.url.searchParams.delete("referral")

    goto($page.url)

    if(referral) localStorage.setItem("referral", referral)
})

</script>
<svelte:head>
    <link
        href="https://lumina.app/auth"
        rel="canonical" />
</svelte:head>
<div class="flex">
    <div class="inner">
        <Tag>Auth Portal</Tag>
        <Logo/>
        <br/>
        {#if auth_page == "select"}
            <Select
                user={user}
                on:next={ next }
                bind:auth_page/>
        {:else if auth_page == "authorize" && $page.data.user_store.user}
            <Authorize
                user={$page.data.user_store.user}
                bind:auth_page/>
        {:else}
            {#if auth_page == "login"}
                <Login
                    bind:auth_page
                    on:next={ next }/>
            {:else if auth_page == "forgot-password"}
                <ForgotPassword on:next={ next }/>
            {:else if auth_page == "create"}
                <CreateAccount on:next={ next }/>
            {/if}
            <Button
                style="transparent"
                left_icon={ArrowLeft}
                on:click={ () => auth_page = "select" }>
                Back
            </Button>
        {/if}
    </div>
    {#if data.app_info}
        <div class="card">
            <AuthorisationInfo
                app={data.app_info.app}
                app_slug={data.app_info.slug}
                redirect={data.app_info.redirect}
                user_selected={auth_page == "authorize"}
            />
        </div>
    {/if}
</div>
<style lang="stylus">
@import variables

.card
    width 100%
    max-width 600px
    padding 24px
    border-radius 6px
    display flex
    flex-direction column
    align-items center
    background transparify(white, 4%)

.flex
    display flex
    height 100%
    padding 36px
    align-items center
    gap 36px
    flex-direction column

.inner
    max-width 450px
    width 100%
    display flex
    flex-direction column
    align-items center
    gap 16px
</style>