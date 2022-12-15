<script lang="ts">
import type { InfoBoxType } from "$lib/components/general_components/general_components_types"

export let infoBox: InfoBoxType

</script>

<div class="main">
    <div class="header">
        <div class="icon">
            <svelte:component this={ infoBox.icon } size={28}/>
        </div>
        <div class="heading">
            {infoBox.heading}
        </div>
    </div>
    <div class="key-information">
        {#each infoBox.paragraphs as paragraph}
            <p>{paragraph}</p>
        {/each}
    </div>
</div>

<style lang="stylus">
@import "variables"
.main
    border-radius 10px
    background transparify(white, 6%)
    padding 20px
    margin 20px 0

.header
    display flex

.icon
    font-size 18px
    color $brand
    margin auto 0
    margin-right 10px

.heading
    font-size 18px
    font-weight 600
    margin auto 0

p
    margin 0
    padding 0
    margin-top 10px
    line-height 22px

</style>