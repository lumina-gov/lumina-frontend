<script lang="ts">
import Alert from "svelte-material-icons/Alert.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Icon from "./Icon.svelte"

const icons = {
    "note": Information,
    "error": CloseCircle,
    "warning": Alert,
    "success": CheckCircle,
}

export let type: keyof typeof icons
</script>
<div class="callout {type}">
    <div class="icon">
        <Icon
            icon={icons[type]}
            size={24}/>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>
<style lang="stylus">
@import variables

.callout
    display flex
    gap 20px
    width 100%
    padding 20px
    border-radius 8px
    background transparify(white, 10%)
    border 2px solid transparify(white, 10%)

    &.note
        background transparify($blue, 10%)
        border-color transparify($blue, 50%)
        .icon
            color $blue
    &.error
        background transparify($red, 10%)
        border-color transparify($red, 50%)
        .icon
            color $red
    &.warning
        background transparify($yellow, 10%)
        border-color transparify($yellow, 50%)
        .icon
            color $yellow
    &.success
        background transparify($green, 10%)
        border-color transparify($green, 50%)
        .icon
            color $green

</style>