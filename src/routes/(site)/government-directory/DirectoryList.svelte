<script lang="ts">
import DirectoryItem from "./DirectoryItem.svelte"

export let organisations: {
    name: string,
    slug: string,
    type: string,
    description: string,
    website: string,
    status: string,
}[]

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