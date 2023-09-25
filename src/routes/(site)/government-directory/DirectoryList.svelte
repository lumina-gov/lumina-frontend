<script lang="ts">
import type { OrganisationsQuery } from "$lib/hygraph/graphql-types"
import DirectoryItem from "./DirectoryItem.svelte"

export let organisations: OrganisationsQuery["organisations"]

</script>
<div class="directory-list">
    {#each organisations as organisation}
        <DirectoryItem {organisation} />
    {/each}
</div>
<style>
.directory-list {
    display: flex;
    flex-direction: column;
    background: color-mix(in srgb, var(--dark-app), white 4%);
    border-radius: 8px;
    width: 100%;
}
</style>