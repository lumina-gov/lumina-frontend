<PageHead
    description="Apply for citizenship or check your citizenship status"
    title={data?.user_wrapper?.user?.citizenship_status === null ? "Apply for citizenship" : "Citizenship status"}
/>
<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import type { PageData } from "./$types"
import InfoBox from "$lib/display/InfoBox.svelte"
import type { Props } from "$lib/utils/typed_props"
import Information from "svelte-material-icons/Information.svelte"
import Alert from "svelte-material-icons/Alert.svelte"
import Help from "svelte-material-icons/HelpCircle.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import FormComponent from "./FormComponent.svelte"
import StatusComponent from "./StatusComponent.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import PageHead from "$lib/components/PageHead.svelte"
import LoginPrompt from "$lib/components/LoginPrompt.svelte"

export let data: PageData

export let notices: Props<InfoBox>[] = [
    {
        color: "yellow",
        icon: Information,
        tag: "Notice",
        title: "Citizenship Pre-registration only",
        description: "Lumina's government is in early stages, and our identity verification systems required for full citizenship are being worked on. On this page, you may pre-register for citizenship, and we will notify you when our citizenship application process is available."
    },
    {
        color: "red",
        icon: Alert,
        tag: "Warning",
        title: "It is an offence to intentionally provide false or misleading information"
    },
    {
        color: "white",
        icon: Help,
        tag: "Info",
        title: "Got questions?",
        description: "Talk to our team on Discord if you have any questions."
    }
]

let loading = false

$: user = data.user_wrapper.user


</script>
{#if loading}
    <OverlayLoading/>
{/if}
<Grid
    padding_vertical={80}
    vertical_gap={40}>
    <GridItem
        align_items="flex-start"
        columns={{
            laptop: "span 9",
            tablet: "span 8",
            mobile: "span 4"
        }}
        gap={40}>
        {#if user && user.citizenship_status === null}
            <FormComponent
                bind:loading
                bind:user/>
        {:else if user && user.citizenship_status}
            <StatusComponent/>
        {:else}
            <Heading right_icon={Passport}>Citizenship Registration</Heading>
            <LoginPrompt/>
        {/if}
    </GridItem>
    <GridItem
        columns={{
            laptop: "span 7",
            tablet: "span 8",
            mobile: "span 4"
        }}>
        <div class="notices">
            {#each notices as notice}
                <InfoBox {...notice}/>
            {/each}
        </div>
    </GridItem>
</Grid>
<style lang="stylus">
@import 'variables'

.notices
    background transparify(white, 6%)
    display flex
    flex-direction column
    padding 24px
    border-radius 8px
    gap 40px

</style>