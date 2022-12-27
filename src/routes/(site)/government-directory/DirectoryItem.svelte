<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Government from "svelte-material-icons/Bank.svelte"

export let organisation: {
    name: string,
    slug: string,
    type: string,
    description: string,
    website: string,
    status: string,
}

</script>
<div class="directory-item">
    <div>
        <Icon icon={Government} color="brand" size={24}/>
        <div class="name">
            {organisation.name}
        </div>
    </div>
    <div>
        <Tag>{organisation.type}</Tag>
        <Tag color={organisation.status === "Halted" ? "white" : "green"} opacity={organisation.status === "Halted"}>{organisation.status}</Tag>
        <!-- <Icon icon={ChevronRight} color="brand" size={24}/> -->
    </div>
</div>
<style lang="stylus">
@import 'variables'

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