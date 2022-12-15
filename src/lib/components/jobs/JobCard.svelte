<script lang="ts">
import InfoCard from "$lib/components/jobs/InfoCard.svelte"
import type { JobType } from "$lib/components/jobs/jobs_types"

export let job: JobType
</script>

<div class="main">
    <div class="heading">
        <div class="icon">
            <svelte:component this={job.icon}/>
        </div>
        <div class="title">
            {job.title}
        </div>
    </div>
    <div class="info-wrapper">
        {#each job.attributes as info}
            <InfoCard bind:info />
        {/each}
    </div>
</div>

<style lang="stylus">
@import 'variables'

.main
    text-decoration none
    outline 1px solid mix(white, transparent, 10%)
    display flex
    color white
    flex-direction column
    gap 10px
    border-radius 5px
    padding 16px
    border 2px solid transparent

    .heading
        display flex
        align-items center
        gap 10px

    .icon
        font-size 24px
        display inline-flex
        color $brand

    .title
        font-size 18px
        font-weight 600
    .info-wrapper
        display flex
        align-items center

</style>