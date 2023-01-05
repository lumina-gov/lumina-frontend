<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import type { PageData } from "./$types"
import InfoBox from "$lib/display/InfoBox.svelte"
import type { Props } from "$lib/utils/typed_props"
import Information from "svelte-material-icons/Information.svelte"
import Alert from "svelte-material-icons/Alert.svelte"
import Help from "svelte-material-icons/HelpCircle.svelte"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import FormComponent from "./FormComponent.svelte"
import StatusComponent from "./StatusComponent.svelte"
import Grid from "$lib/components/layouts/Grid.svelte"
import GridItem from "$lib/components/layouts/GridItem.svelte"
import Passport from "svelte-material-icons/Passport.svelte"

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



</script>
{#if loading}
    <OverlayLoading/>
{/if}
<Grid vertical_gap={40} padding_vertical="100px">
    <GridItem
        align_items="flex-start"
        gap="20px"
        columns={{
            laptop: "span 9",
            tablet: "span 8",
            mobile: "span 4"
        }}>
        {#if data.user_wrapper.user && data.user_wrapper.user.citizenship_status === null}
            <FormComponent bind:loading bind:user={data.user_wrapper.user}/>
        {:else if data.user_wrapper.user && data.user_wrapper.user.citizenship_status}
            <StatusComponent/>
        {:else}
            <Heading right_icon={Passport}>Citizenship Registration</Heading>
            <Paragraph>
                You must be logged in to register for citizenship.
            </Paragraph>
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