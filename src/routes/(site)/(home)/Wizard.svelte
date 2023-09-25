<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import WizardItem from "./WizardItem.svelte"
import Input from "$lib/controls/Input.svelte"
import ContentCopy from "svelte-material-icons/ContentCopy.svelte"
import { page } from "$app/stores"

import { CitizenshipStatus, type MeQuery } from "$lib/graphql/graphql-types"
import Discord from "svelte-material-icons/Discord.svelte"
import site_data from "$lib/data/site_data"
import { onMount } from "svelte"


export let user: NonNullable<MeQuery["me"]>
let joined_discord = false

function join_discord() {
    window.localStorage.setItem("joined_discord", "true")
    joined_discord = true
    window.open(site_data.socials.discord, "_blank")
}

onMount(() => {
    joined_discord = window.localStorage.getItem("joined_discord") === "true"
})

</script>
<div class="wizards">
    <WizardItem checked={user.citizenship_status === CitizenshipStatus.Pending}>
        <Paragraph>
            <strong>Apply for citizenship</strong> to become a citizen of Lumina.
        </Paragraph>
        <Button
            style="translucent"
            href="/citizenship"
            left_icon={Passport}>
            Apply for citizenship
        </Button>
    </WizardItem>
    <WizardItem checked={joined_discord}>
        <Paragraph>
            <strong>Join the conversation</strong> at our discord server.
        </Paragraph>
        <Button
            style="translucent"
            left_icon={Discord}
            on:click={ join_discord }>
            Join Server
        </Button>
    </WizardItem>
    <WizardItem checked={user.referral_count > 0}>
        <Paragraph>
            <strong>Refer a friend</strong> to earn Aura. You have { user.referral_count } referrals.
        </Paragraph>
        <Paragraph>
            Earn 10 Aura (<em>Lumina's currency</em>) for every friend you refer.
        </Paragraph>
        <Input
            name="Referrral Link"
            readonly
            right_icon={ContentCopy}
            right_icon_handler={() => {
                navigator.clipboard.writeText("https://lumina.earth/auth?referral=" + user.id)
                $page.data.alerts.create_alert("success", "Copied to clipboard")
            }}
            value={"https://lumina.earth/auth?referral=" + user.id}
        />
    </WizardItem>
</div>
<style lang="stylus">
@import variables

.wizards
    padding 24px
</style>