<script lang="ts">
import type { SvelteComponent } from "svelte"

export let stats: {
    value: string | number,
    name: string,
    icon: typeof SvelteComponent,
    color: string
}[]

</script>

<div class="stats">
    {#each stats as stat}
        <div class="stat">
            <div class="stat-icon" style="color: {stat.color};">
                <svelte:component this={stat.icon} />
            </div>
            <div class="stat-value">
                <span>{stat.value}</span>
            </div>
            <div class="stat-name">
                <span>{stat.name}</span>
            </div>
        </div>
    {/each}
</div>

<style lang="stylus">
@import "variables"

.stats
    display grid
    grid-template-columns repeat(4, 1fr)
    grid-gap 20px
    padding 40px 0
    @media (max-width 900px)
        grid-template-columns repeat(2, 1fr)
        grid-gap 40px
        padding 40px 0
    @media (max-width 500px)
        grid-template-columns 1fr
        grid-gap 60px
        padding 40px 0

.stat
    display flex
    flex-direction column
    align-items center
    text-align center

.stat-icon
    font-size 48px

.stat-value
    font-size 36px
    font-weight 600

.stat-name
    font-size 18px
    opacity 0.5

</style>