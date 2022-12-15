<script lang="ts">
import type { IAmAPickerType } from "$lib/components/general_components/general_components_types"

export let pickerInfo: IAmAPickerType

let currentSelected: number = 0
</script>

<div class="main">
    <div class="heading">
        {pickerInfo.heading}
    </div>
    <div class="choices-wrapper">
        {#each pickerInfo.choices as choice, i}
            <div class="choice" style={(i === currentSelected) ? "background-color: #492C9C;" : "" } on:click={ () => currentSelected = i }>
                <div class="icon">
                    <svelte:component this={choice.icon} />
                </div>
                <div class="text">
                    {choice.text}
                </div>
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
@import "variables"

.main
    max-width 465px
    width 100%
    display flex
    flex-direction column
    margin 0 auto

.heading
    font-size 40px
    line-height 48px
    font-weight 600
    margin 0 auto
    margin-bottom 10px

.choices-wrapper
    display flex
    justify-content space-between

.choice
    color white
    background-color rgba(45, 55, 68, 0.35)
    display flex
    padding 10px
    border-radius 10px
    font-size 16px
    font-weight 500
    border 3px solid white

.choice:hover
    cursor pointer
    border 3px solid $brand

.icon
    font-size 16px
    height 16px
    margin-right 5px

</style>