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
<style lang="stylus">
@import variables

.directory-list
    display flex
    flex-direction column
    background lighten($dark_app, 4%)
    border-radius 8px
    width 100%
</style>