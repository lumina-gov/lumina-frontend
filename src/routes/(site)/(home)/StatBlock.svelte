<script lang="ts">
import type { SvelteComponent } from "svelte"

export let stat: {
    value: string | number,
    name: string,
    icon: typeof SvelteComponent,
    color: string
}

</script>

<div class="stat">
    <div
        style:background={ stat.color }
        class="stat-icon">
        <svelte:component this={ stat.icon } />
    </div>
    <div class="stat-value">
        <span>{ stat.value }</span>
    </div>
    <div class="stat-name">
        <span>{ stat.name }</span>
    </div>
</div>

<style lang="stylus">
@import variables

.stat
    text-align center
    display flex
    gap 12px
    align-items center

.stat-icon
    font-size 32px
    color white
    display inline-flex
    height 48px
    width 48px
    border-radius 50px
    align-items center
    justify-content center

.stat-value
    font-size 36px
    padding-bottom 4px
    font-weight 600
    display inline-flex

.stat-name
    font-size 18px
    opacity 0.5
    display inline-flex

</style>