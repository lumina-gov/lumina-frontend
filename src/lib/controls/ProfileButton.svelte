<script lang="ts">
import Profile from "$lib/display/Profile.svelte"
import type { User } from "$lib/types/user"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{ click: Event }>()
export let active = false
export let user: User

function clicked(e: Event) {
    e.stopPropagation()
    dispatch("click", e)
}
</script>
<div
    class="profile-button-wrapper"
    class:active
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keydown={ e => {
        if (e.key === "Enter" || e.key === "Escape") {
            clicked(e)
        }
    } }>
    <Profile/>
</div>
<style lang="stylus">
@import 'variables'

.profile-button-wrapper
    padding 4px
    cursor pointer
    border-radius 4px
    display flex
    align-items center
    justify-content center
    &:focus-visible
        outline-effect()
    &:hover, &:focus
        background transparify(white, 8%)
    &:active
        background transparify(white, 14%)
    &.active
        background transparify(white, 14%)
    @media (max-width $tablet)
        border-radius 0
        height 100%
        width 100%
</style>