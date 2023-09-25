<script lang="ts">
import type { MilestoneContributor } from "$lib/data/milestones"
import Paragraph from "$lib/display/Paragraph.svelte"
export let contributor: MilestoneContributor
</script>
<div class="contributor">
    <span>{ contributor.name }</span>
    <Paragraph>{ contributor.description }</Paragraph>
</div>
<style>
.contributor {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 16px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    padding: 8px 16px;

    & span {
        font-weight: 600;
    }
}
</style>

