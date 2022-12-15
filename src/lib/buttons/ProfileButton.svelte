<script lang="ts">
import Profile from "$lib/display/Profile.svelte"

export let active = false
</script>
<div
    on:click|stopPropagation
    tabindex="0"
    class="profile-button-wrapper"
    class:active>
    <Profile/>
</div>
<style lang="stylus">
@import 'variables'

.profile-button-wrapper
    padding 4px
    cursor pointer
    border-radius 4px
    &:hover
        background transparify(white, 4%)
    &:active
        background transparify(white, 12%)
    &.active
        background transparify(white, 8%)
</style>