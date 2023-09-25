<script lang="ts">
import AlertCount from "$lib/display/AlertCount.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Heading from "$lib/display/Heading.svelte"

import type { IconComponent } from "$lib/utils/icon_type"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

export let icon: IconComponent
export let title: string
export let alert_count: number | null = null
export let description: string
export let href: string

</script>
<a
    class="card"
    href={href}>
    <div class="main">
        <Heading
            left_icon={icon}
            level={3}>
            { title }
            {#if alert_count}
                <AlertCount count={alert_count} />
            {/if}
        </Heading>
        <div class="description">
            { description }
        </div>
    </div>
    <Coloured>
        <ChevronRight size="24px"/>
    </Coloured>
</a>
<style>
.card {
    padding: 16px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.04);
    gap: 16px;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
}

.card:hover {
    background: rgba(255, 255, 255, 0.08);
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.description {
    opacity: 0.6;
    font-size: 14px;
}
</style>