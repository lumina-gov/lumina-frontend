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
            <Tag>{ organisation.type }</Tag>
            <Tag --color="var(--green)">{ organisation.status }</Tag>
        </FlexWrap>
    </div>
    <Icon
        --color="var(--brand)"
        icon={ChevronRight}/>
</a>
<style>
    .organisation {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        color: inherit;
        border-radius: 8px;
        background-color: rgba(var(--white-rgb), 0.04);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
        transition: background 0.2s ease-in-out;
    }
    .organisation:hover {
        background: rgba(var(--white-rgb), 0.08);
    }
    .organisation .logo {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        background-size: cover;
        background-position: center;
        background: rgba(var(--white-rgb), 0.1);
    }
    .organisation .org-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .organisation .org-details .name {
        font-weight: 700;
        font-size: 18px;
    }
</style>