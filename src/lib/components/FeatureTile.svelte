<script lang="ts">
import Icon from "$lib/display/Icon.svelte"

import type { IconComponent } from "$lib/utils/icon_type"

export let icon: IconComponent
export let title: string
export let description: string
</script>
<div class="feature">
    <div class="feature-icon">
        <Icon
            --color="var(--brand)"
            --size="24px"
            icon={icon}/>
    </div>
    <div class="feature-text">
        <h3 class="feature-heading">
            { title }
        </h3>
        <div class="feature-description">
            { description }
        </div>
    </div>
</div>
<style>
.feature {
    display: flex;
    flex-direction: row;
    gap: 16px;
}
.feature-text {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
}
.feature-heading {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
}
.feature-description {
    font-size: 16px;
    font-weight: 500;
    opacity: 0.6;
}
</style>