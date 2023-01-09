<script lang="ts">
import type { SvelteComponent } from "svelte"

export let title: string
export let left_icon: typeof SvelteComponent
</script>
<div class="status">
    <div class="title">
        { title }
    </div>
    <div class="data">
        <div class="icon">
            <svelte:component this={ left_icon }/>
        </div>
        <slot/>
    </div>
</div>

<style lang="stylus">
@import "variables"
.status
    padding 8px
    border-radius 4px
    display flex
    flex-direction column
    font-size 22px
    font-weight 600
    background transparify(white, 4%)
    gap 8px
    .title
        font-size 14px
        font-weight 700
        opacity 0.5
        text-transform uppercase
    .data
        display flex
        align-items center
        gap 8px
    .icon
        display inline-flex
        color $yellow
</style>