<script lang="ts">
import InfoCard from "$lib/components/jobs/InfoCard.svelte"
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"
import type { JobType } from "$lib/components/jobs/jobs_types"

export let job: JobType

</script>

<div class="main">
    <div class="left">
        <div class="icon">
            <svelte:component this={job.icon}/>
        </div>
        <div class="title">
            {job.title}
        </div>
        <div class="info-wrapper">
            {#each job.attributes as info}
                <InfoCard
                    bind:info
                />
            {/each}
        </div>
    </div>
    <div class="arrow">
        <svelte:component this={ArrowRight} />
    </div>
</div>