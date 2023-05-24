<PageHead
    description="Create your account and start building your future city."
    title="Onboarding"
/>
<script lang="ts">
import Logo from "$lib/icons/Logo.svelte"
import AccountCreate from "./AccountCreate.svelte"
import AccountType from "./AccountType.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import Tag from "$lib/display/Tag.svelte"
import { onMount } from "svelte"
import { get_query } from "$lib/utils/query"
import PageHead from "$lib/components/PageHead.svelte"

enum PageType {
    AccountType,
    AccountCreate
}
let page = PageType.AccountType

let percentages = {
    [PageType.AccountType]: 25,
    [PageType.AccountCreate]: 75,
}

$: width = percentages[page]

onMount(() => {
    let referral = get_query("referral")

    if(referral) localStorage.setItem("referral", referral)
})

</script>
<div class="page">
    <div class="top-part">
        <Logo/>
        <ProgressBar bind:width/>
        <Tag color="brand">Onboarding</Tag>
    </div>
    {#if page == PageType.AccountType}
        <AccountType on:next={ () => page = PageType.AccountCreate }/>
    {:else if page == PageType.AccountCreate}
        <AccountCreate/>
    {/if}
</div>
<style lang="stylus">

.top-part
    display: flex
    flex-direction: column
    align-items: center
    max-width: 500px
    width: 100%
    gap: 20px


.page
    padding: 80px 20px
    display: flex
    flex-direction: column
    gap: 40px
    align-items: center

</style>