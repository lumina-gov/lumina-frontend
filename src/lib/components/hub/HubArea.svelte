<script lang="ts">
import HubCard from "$lib/components/hub/HubCard.svelte"

import Hub from "$lib/icons/Hub.svelte"
import { three_wide, two_wide } from "$lib/data/hub_data"
</script>

<div class="hub-wrapper" id="hub">
    <div class="title hub">
        <div class="hub-icon">
            <svelte:component this={Hub} />
        </div>
        <h2 class="hub-heading">
            Lumina Hub
        </h2>
    </div>
    <div class="hub-cards-two-wide-wrapper">
        {#each two_wide as info}
            <HubCard bind:info/>
        {/each}
    </div>
    <div class="hub-cards-three-wide-wrapper">
        {#each three_wide as info}
            <HubCard bind:info/>
        {/each}
    </div>
</div>

<style lang="stylus">
@import "variables"

.hub-wrapper
    gap 20px
    display flex
    flex-direction column
    width 100%

.title.hub
    display flex
    gap 20px

.hub-icon
    font-size 46px
    display inline-flex

.hub-heading
    margin 0
    padding 0
    font-size 40px
    margin auto 0

.hub-cards-two-wide-wrapper
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 20px
    @media (max-width 750px)
        grid-template-columns 1fr
        max-width 500px
        margin auto

.hub-cards-three-wide-wrapper
    display grid
    grid-template-columns 1fr 1fr 1fr
    grid-gap 20px
    margin-bottom 20px
    @media (max-width 850px)
        grid-template-columns 1fr 1fr
    @media (max-width 750px)
        grid-template-columns 1fr
        max-width 500px
        margin auto

</style>