<script lang="ts">
import { goto, invalidateAll } from "$app/navigation"
import { page } from "$app/stores"
import Box from "$lib/cards/Box.svelte"
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import Password from "$lib/controls/Password.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import { ResetPasswordDocument, type LoginMutation } from "$lib/graphql/graphql-types.js"
import Logo from "$lib/icons/Logo.svelte"
import { MessageType } from "$lib/types/message.js"
import { set_cookie } from "$lib/utils/cookie.js"
import type { GraphQLError } from "@urql/core/dist/urql-core-chunk.js"
import { createEventDispatcher } from "svelte"
import Send from "svelte-material-icons/Send.svelte"
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"

export let data

let dispatch = createEventDispatcher<{ next: void }>()
let password = ""

let loading = false

async function reset_password() {
    loading = true
    let res = await $page.data.graph.gmutation(ResetPasswordDocument, {
        token: data.token,
        password
    })
    if (!res.data || res.error) {
        loading = false
        $page.data.alerts.create_alert(MessageType.Error, res.error?.message || "Failed to reset password")
        return
    }

    $page.data.alerts.create_alert(MessageType.Success, "Password reset")

    {
        let res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                password: password
            }),
        })

        loading = false

        let json = await res.json() as { data?: LoginMutation, errors?: GraphQLError[]}

        if (json.errors || !json.data) {
            if (json.errors) {
                for (let error of json.errors) {
                    $page.data.alerts.create_alert(MessageType.Error, error.message)
                }
            } else {
                $page.data.alerts.create_alert(MessageType.Error, "Login failed")
            }
        } else {
            $page.data.alerts.create_alert(MessageType.Success, "Login Successful")
            set_cookie("token", null)
            set_cookie("token", json.data.auth_token)
            await invalidateAll()
            await goto("/")
        }
    }
}
</script>
{#if loading}
    <OverlayLoading/>
{/if}
<div class="flex">
    <Tag>Auth Portal</Tag>
    <Logo/>
    <Card
        max_width="600px"
        padding="20px">
        <Box
            gap="16px"
            max_width="400px"
            padding={true}>
            <Heading
                center={true}
                left_icon={ShieldAccount}>Reset Password</Heading>
            <div class="email">
                { data.email }
            </div>
            <Password
                autocomplete="new-password"
                check_strength={true}
                on:keyup={ e => { if (e.key === "Enter" && password) reset_password} }
                bind:value={ password }/>
            <Button
                disabled={!password}
                right_icon={Send}
                on:click={ reset_password }>
                Reset Password
            </Button>
        </Box>
    </Card>
</div>
<style lang="stylus">
@import variables

.email
    padding 6px
    border-radius 6px
    border 1px solid transparify(white, 8%)
    color transparify(white, 50%)
    align-self center


.flex
    display flex
    height 100%
    padding 36px
    align-items center
    gap 36px
    flex-direction column
</style>