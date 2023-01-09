<script lang="ts">
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

export let organisation: {
    name: string
    slug: string
    logo: string
    type: string
    status: string
}

</script>
<a
    class="organisation"
    href="/organisations/manage/{organisation.slug}">
    <div
        style:background-image="url({ organisation.logo })"
        class="logo"/>
    <div class="org-details">
        <div class="name">
            { organisation.name }
        </div>
        <FlexWrap>
            <Tag color="brand">{ organisation.type }</Tag>
            <Tag color="green">{ organisation.status }</Tag>
        </FlexWrap>
    </div>
    <Icon
        color="brand"
        icon={ChevronRight}/>
</a>
<style lang="stylus">
@import "variables"

.organisation
    display flex
    align-items center
    gap 16px
    padding 16px
    color inherit
    border-radius 8px
    background-color transparify(white, 4%)
    box-shadow 0 0 8px rgba(0, 0, 0, 0.1)
    transition background 0.2s ease-in-out
    &:hover
        background transparify(white, 8%)
    .logo
        width 48px
        height 48px
        border-radius 8px
        background-size cover
        background-position center
        background transparify(white, 10%)
    .org-details
        flex 1
        display flex
        flex-direction column
        gap 8px
        .name
            font-weight 700
            font-size 18px
</style>