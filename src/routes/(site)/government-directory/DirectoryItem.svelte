<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import { OrganisationStatus, OrganisationType, type OrganisationsQuery } from "$lib/hygraph/graphql-types"
import Government from "svelte-material-icons/Bank.svelte"
import Web from "svelte-material-icons/Web.svelte"

export let organisation: OrganisationsQuery["organisations"][0]

</script>
<div class="directory-item">
    <div>
        <Icon
            color="brand"
            icon={Government}
            size={24}/>
        <div class="name">
            { organisation.name }
        </div>
    </div>
    <div>
        {#if organisation.officialWebsite}
            <IconButton
                href={organisation.officialWebsite}
                icon={Web}/>
        {/if}
        {#each organisation.tags.filter(tag => tag !== OrganisationType.Government) as tag}
            <Tag>{ tag }</Tag>
        {/each}
        <Tag
            color={organisation.organisationStatus === OrganisationStatus.Halted ? "white" : "green"}
            opacity={organisation.organisationStatus === OrganisationStatus.Halted}>{ organisation.organisationStatus }</Tag>
        <!-- <Icon icon={ChevronRight} color="brand" size={24}/> -->
    </div>
</div>
<style lang="stylus">
@import variables

.directory-item
    display flex
    justify-content space-between
    align-items center
    padding 16px
    border-bottom 1px solid transparify(white, 10%)
    gap 16px
    > div
        display flex
        align-items center
        gap 12px
    &:last-child
        border-bottom none
    .name
        font-size 18px
        font-weight 700
</style>