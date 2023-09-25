<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { SvelteComponent } from "svelte"

export let href: string
export let text: string
export let left_icon: typeof SvelteComponent
</script>
<a
    class="nav-link"
    {href}>
    <Icon
        icon={left_icon}
        size="24px" />
    <div class="text">
        { text }
    </div>
</a>
<style lang="stylus">
@import variables

.nav-link
    color white
    display flex
    flex-direction row
    align-items center
    gap 8px
    font-size 16px
    padding 8px
    outline 0
    font-weight 500
    color transparify(white, 80%)
    border-radius 4px
    &:hover, &:focus
        background transparify(white, 6%)

</style>
