<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { IconComponent } from "$lib/utils/icon_type"

export let href: string
export let text: string
export let left_icon: IconComponent
</script>
<a
    class="nav-link"
    {href}>
    <Icon
        --size="24px"
        icon={left_icon} />
    <div class="text">
        { text }
    </div>
</a>
<style>
.nav-link {
    color: color-mix(in srgb, white 80%, transparent);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    padding: 8px;
    outline: 0;
    font-weight: 500;
    border-radius: 4px;

    &:hover, &:focus {
        color: white;
        background: rgba(255, 255, 255, 0.04);
    }
}
</style>