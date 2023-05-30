<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Check from "svelte-material-icons/Check.svelte"
import Circle from "svelte-material-icons/Circle.svelte"

export let checked: boolean

</script>
<div class="wizard">
    <div class="line">
        <div
            class="circle"
            class:checked>
            <Icon
                icon={checked ? Check : Circle}
                opacity={checked ? 1 : 0.2}/>
        </div>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>
<style lang="stylus">
@import variables

.wizard
    display grid
    grid-template-columns max-content 1fr
    gap 40px
    &:last-child
        .line
            background transparent
        .content
            margin-bottom 0
    .content
        padding 6px 0
        margin-bottom 20px
        display flex
        flex-direction column
        align-items start
        gap 12px

    .line
        width 4px
        height 100%
        background transparify(white, 8%)
        display flex
        align-items start
        justify-content center
    .circle
        min-width 32px
        min-height 32px
        display flex
        align-items center
        justify-content center
        border-radius 50%
        background mix(white, $dark_app, 10%)
        &.checked
            background $brand
</style>