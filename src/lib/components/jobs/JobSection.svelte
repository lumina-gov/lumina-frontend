<script lang="ts">
import JobCard from "$lib/components/jobs/JobCard.svelte"
import type { JobField } from "./jobs_types"

export let jobField: JobField

</script>

<div class="main">
    <div class="heading">
        {jobField.title}
    </div>
    <div class="jobs-inner-wrapper">
        {#each jobField.jobs as job}
            <JobCard bind:job />
        {/each}
    </div>
</div>

<style lang="stylus">
.heading
    opacity 0.5
    font-size 14px
    text-transform uppercase
    font-weight 600
    margin-bottom 10px

.jobs-inner-wrapper
    display grid
    width 100%
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    gap 20px
</style>