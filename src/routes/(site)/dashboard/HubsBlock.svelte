<script lang="ts">
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"

import type { IconComponent } from "$lib/utils/icon_type"

type HubArea = {
    href: string,
    title: string,
    description?: string,
    icon: IconComponent
}

export let main_area: HubArea
export let areas: HubArea[]

</script>

<div class="main">
    <a
        class="link"
        href={main_area.href}>
        <div class="left-wrapper">
            <div class="icon">
                <svelte:component this={ main_area.icon } />
            </div>
            <div class="heading">
                { main_area.title }
            </div>
            {#if main_area.description}
                <p>
                    { main_area.description }
                </p>
            {/if}
        </div>
        <div class="chevron-right">
            <svelte:component this={ ChevronRight } />
        </div>
    </a>
    {#each areas as area}
        <a
            class="area link"
            href={area.href}>
            <div class="icon">
                <svelte:component this={ area.icon } />
            </div>
            <div class="info-heading">
                { area.title }
            </div>
            <div class="chevron-right">
                <svelte:component this={ ChevronRight } />
            </div>
        </a>
    {/each}
</div>

<style>
.main {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background: rgba(255, 255, 255, 0.04);
    justify-content: center;
}

.link {
    text-decoration: none;
    color: white;
    padding: 24px;
    display: flex;
    max-width: 450px;
    &:hover {
        color: white;
        background-color: rgba(255, 255, 255, 0.04);
    }
    @media (max-width: 1200px) {
        margin: 0 auto;
        width: 100%;
    }
}

.area {
    display: flex;
    align-items: center;
}

.heading {
    margin: 10px 0;
    font-size: 28px;
    font-weight: 700;
}

p {
    font-weight: 500;
    margin: 0;
    opacity: 0.5;
    max-width: 315px;
}

.icon {
    display: inline-flex;
    font-size: 36px;
    margin-right: 10px;
    color: var(--brand);
}

.info-heading {
    font-weight: 600;
    font-size: 18px;
    margin: auto 0;
}

.chevron-right {
    display: inline-flex;
    margin-left: auto;
    font-size: 28px;
}
</style>