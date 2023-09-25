<script lang="ts">
import type { IconComponent } from "$lib/utils/icon_type"


export let icon: IconComponent
export let text: string
</script>
<div class="stat">
    <div class="icon">
        <svelte:component
            this={ icon }
            size="24px" />
    </div>
    <div class="text">
        { text }
    </div>
</div>
<style>
.stat {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    font-weight: 600;
    & .icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--brand);
    }
}
</style>