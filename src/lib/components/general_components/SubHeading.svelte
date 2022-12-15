<script lang="ts">
import type { HeaderInfoType } from "$lib/components/general_components/general_components_types"
export let headerInfo: HeaderInfoType

</script>

<div class="main">
    <div class="header">
        <div class="header-icon">
            <svelte:component this={headerInfo.icon} />
        </div>
        <h2>
            {headerInfo.heading}
        </h2>
    </div>
    <div class="subtitle">
        {#each headerInfo.paragraphs as paragraph}
            <p>
                {paragraph}
            </p>
        {/each}
    </div>
</div>

<style lang="stylus">
@import "variables"

.main
    max-width 800px
    margin 0 auto
    display flex
    flex-direction column

.header
    display flex
    margin 0 auto

.header-icon
    font-size 40px
    height 40px
    width 40px
    color $brand
    margin auto 0
    margin-right 10px

h2
    margin 0
    padding 0
    font-size 30px
    font-weight 600
    margin auto

.subtitle
    font-size 18px
    opacity 0.6
    margin 0 auto
    margin-top 10px

p
    text-align center
</style>