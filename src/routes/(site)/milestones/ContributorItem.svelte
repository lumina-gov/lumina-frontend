<script lang="ts">
import type { MilestoneContributor } from "$lib/data/milestones"
import Paragraph from "$lib/display/Paragraph.svelte"
export let contributor: MilestoneContributor
</script>
<div class="contributor">
    <span>{ contributor.name }</span>
    <Paragraph>{ contributor.description }</Paragraph>
</div>
<style lang="stylus">
@import variables

.contributor
    display grid
    grid-template-columns 1fr 3fr
    gap 16px
    background transparify(white, 4%)
    padding 8px 16px
    span
        font-weight 400
</style>
