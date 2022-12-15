<script lang="ts">
import InfoBox from "$lib/components/general_components/InfoBox.svelte"
import type { RightsDutiesIntro } from "$lib/components/pages/rights_and_duties/rights_duties_types"

import Text from "svelte-material-icons/Text.svelte"

export let introInfo: RightsDutiesIntro
</script>

<div class="main">
    <div class="header">
        <div class="header-icon">
            <svelte:component this={Text}/>
        </div>
        <h1>
            {introInfo.heading}
        </h1>
    </div>
    {#each introInfo.paragraphs as paragraph}
        <p>
            {paragraph}
        </p>
    {/each}
    <div class="info-box-wrapper">
        <InfoBox infoBox={introInfo.infoBox} />
    </div>
    <div class="examples-wrapper">
        <div class="grid-column">
            <div class="example-heading">
                {introInfo.positiveRightsHeading}
            </div>
            <ul>
                {#each introInfo.positiveRights as right}
                    <li>
                        {right}
                    </li>
                {/each}
            </ul>
            <p class="explanation">
                {introInfo.positiveExplanation}
            </p>
        </div>
        <div class="grid-column">
            <div class="example-heading">
                {introInfo.negativeRightsHeading}
            </div>
            <ul>
                {#each introInfo.negativeRights as right}
                    <li>
                        {right}
                    </li>
                {/each}
            </ul>
            <p class="explanation">
                {introInfo.negativeExplanation}
            </p>
        </div>
    </div>
</div>

<style lang="stylus">
.header
    display flex
    margin-bottom 20px
    margin 0 auto

.header-icon
    font-size 26px
    height 26px
    width 26px
    margin auto 0
    margin-right 10px

h1
    margin 0
    padding 0
    font-size 26px
    line-height 28px
    font-weight 700

.examples-wrapper
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 0 20px

.example-heading
    font-weight 600
    line-height 22px

ul
    padding 0 25px
    margin 10px 0
    line-height 22px

.info-box-wrapper
    margin 10px 0

</style>