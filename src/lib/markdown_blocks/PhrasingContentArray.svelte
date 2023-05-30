<script lang="ts">
import type { PhrasingContent } from "mdast-util-from-markdown/lib"
import PhrasingContentComponent from "./PhrasingContent.svelte"

export let children: PhrasingContent[]
</script>
{#each children as block}
    <PhrasingContentComponent {block}/>
{/each}