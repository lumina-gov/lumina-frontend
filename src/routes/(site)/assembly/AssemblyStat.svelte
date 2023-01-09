<script lang="ts">
import type { SvelteComponent } from "svelte"

export let icon: typeof SvelteComponent
export let text: string
</script>
<div class="stat">
    <div class="icon">
        <svelte:component
            this={ icon }
            size="24px" />
    </div>
    <div class="text">
        { text }
    </div>
</div>
<style lang="stylus">
@import 'variables'

.stat
    display flex
    align-items center
    gap 6px
    font-size 16px
    font-weight 600
    .icon
        width 20px
        height 20px
        display flex
        align-items center
        justify-content center
        color $brand
</style>