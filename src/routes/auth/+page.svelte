<script lang="ts">
import LightUniversity from "$lib/icons/LightUniversity.svelte"
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

export let data

let auth_page = "select"

$: user = data.user_store.user

let auth_request = {
    app: {
        name: "Lumina University",
        official: true,
        description: "My App Description",
        icon: LightUniversity
    },
    redirect_location: "https://luminauniversity.earth",
    scopes: [
        "Foo"
    ],
    created: new Date(),
}

async function next() {
    if (auth_request){
    // do something
    } else {
        await invalidateAll()
        // we are authenticated
        let redirect = $page.url.searchParams.get("redirect")
        await goto(redirect ?? "/")
    }
}

</script>
<div class="flex">
    {#if auth_request}
        <div class="wrapper light">
            <div class="inner">
                <AuthorisationInfo {auth_request}/>
            </div>
        </div>
    {/if}
    <div class="wrapper">
        <div class="inner">
            <Tag>Auth Portal</Tag>
            <Logo/>
            <br/>
            {#if auth_page == "select"}
                <Select
                    user={user}
                    on:next={ next }
                    bind:auth_page/>
            {:else}
                {#if auth_page == "login"}
                    <Login on:next={ next }/>
                {:else if auth_page == "create"}
                    <CreateAccount on:next={ next }/>
                {:else if auth_page == "authorize"}
                    <Authorize/>
                {/if}
                <Button
                    style="transparent"
                    left_icon={ArrowLeft}
                    on:click={ () => auth_page = "select" }>
                    Back
                </Button>
            {/if}
        </div>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.flex
    display flex
    height 100%

.wrapper
    flex 1 0 0
    display flex
    align-items center
    justify-content center
    padding 36px
    &.light
        background transparify(white, 4%)

.inner
    max-width 500px
    width 100%
    display flex
    flex-direction column
    align-items center
    gap 16px
</style>