<script lang="ts">
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"
import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"
import HumanMaleFemaleChild from "svelte-material-icons/HumanMaleFemaleChild.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

import { createEventDispatcher } from "svelte"
import SelectCard from "$lib/controls/SelectCard.svelte"
import Button from "$lib/controls/Button.svelte"
import ShieldLock from "svelte-material-icons/ShieldLock.svelte"
import Heading from "$lib/display/Heading.svelte"

let dispatch = createEventDispatcher()

let cards = [
    {
        title: "For myself",
        description: "One account. All of Lumina. Sign up to become a citizen here.",
        icon: HumanGreetingVariant,
        enabled: true
    },
    {
        title: "For my child",
        description: "Create an account for my child linked to my account",
        icon: HumanMaleFemaleChild,
        tag: "Coming Soon",
    }
]

let current = 0
</script>
<div class="account-page">
    <div class="top-part">
        <Heading left_icon={ShieldAccount}>
            Choose account type
        </Heading>
        <div class="paras">
            <p>
                We'll streamline your setup experience accordingly.
            </p>
            <p>
                This account can be used for your citizenship application later.
            </p>
        </div>
    </div>
    <div class="bottom-part">
        <div class="cards">
            {#each cards as card, i}
                <SelectCard
                    i={i}
                    info={card}
                    bind:current/>
            {/each}
        </div>
        <Button
            right_icon={ChevronRight}
            on:click={ () => dispatch("next") }>
            Next
        </Button>
        <Button
            style="transparent"
            href="/signin"
            right_icon={ShieldLock}
        >
            I already have an account
        </Button>
    </div>
</div>


<style lang="stylus">
@import 'variables'

.account-page
    display flex
    flex-direction column
    align-items center
    gap 40px


.top-part
    display flex
    flex-direction column
    align-items center
    gap 12px


.bottom-part
    display: flex
    flex-direction: column
    gap: 32px

p
    opacity: 0.5
    margin: 0
    padding: 4px 0px
    text-align: center


.cards
    display grid
    grid-template-columns repeat(auto-fit, minmax(250px, 1fr))
    gap 32px
    // width 100%
</style>