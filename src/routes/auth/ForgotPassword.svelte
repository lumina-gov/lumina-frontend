<script lang="ts">
import Box from "$lib/cards/Box.svelte"
import Card from "$lib/cards/Card.svelte"
import Input from "$lib/controls/Input.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"

import { page } from "$app/stores"
import { SendPasswordResetEmailDocument } from "$lib/graphql/graphql-types"
import Button from "$lib/controls/Button.svelte"
import Email from "svelte-material-icons/Email.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"
import Heading from "$lib/display/Heading.svelte"


let email = ""
let loading = false
async function reset_password () {
    loading = true
    let res = await $page.data.graph.gmutation(SendPasswordResetEmailDocument, {
        email
    })
    loading = false

    if (!res.data || res.error) {
        $page.data.alerts.create_alert("error", "Failed to send password reset email")
        return
    }

    $page.data.alerts.create_alert("success", "Password reset email sent")
}

</script>
{#if loading}
    <OverlayLoading/>
{/if}
<Card padding="24px">
    <Box
        gap="20px"
        max_width="360px">
        <Heading
            center={true}
            left_icon={ShieldAccount}>
            Reset Password
        </Heading>
        <Input
            name="email"
            autocomplete="email"
            focus_on_mount={true}
            left_icon={Email}
            placeholder="Enter your email"
            type="email"
            bind:value={ email }
            on:keyup={ e => { if (e.key === "Enter" && email) reset_password} }/>
        <Button
            disabled={!email.includes("@")}
            right_icon={ChevronRight}
            on:click={ reset_password }>
            Send Reset Email
        </Button>
    </Box>
</Card>