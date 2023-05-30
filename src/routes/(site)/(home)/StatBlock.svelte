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
        style:color={ stat.color }
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
    flex-direction column
    align-items center

.stat-icon
    font-size 48px

.stat-value
    font-size 36px
    padding-bottom 4px
    font-weight 600

.stat-name
    font-size 18px
    opacity 0.5

</style>