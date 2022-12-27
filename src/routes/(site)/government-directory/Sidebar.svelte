<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Dot from "svelte-material-icons/Circle.svelte"
export let items: {
    name: string,
    href: string,
}[]
</script>
<div class="sidebar">
    {#each items as item}
        <a href={item.href} class="item">
            <Icon icon={Dot} size={14} color="brand"/>
            { item.name }
        </a>
    {/each}
</div>
<style lang="stylus">
@import "variables"

.sidebar
    display flex
    flex-direction column
    position sticky
    top 80px
    .item
        display flex
        align-items center
        gap 16px
        padding 16px
        border-bottom 1px solid transparify(white, 10%)
        color inherit
        font-size 18px
        font-weight 600
        &:last-child
            border-bottom none
</style>