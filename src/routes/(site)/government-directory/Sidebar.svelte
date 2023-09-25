<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Dot from "svelte-material-icons/Circle.svelte"
export let items: {
    name: string,
    href: string,
}[]
</script>
<div class="sidebar">
    {#each items as item}
        <a
            class="item"
            href={item.href}>
            <Icon
                --color="var(--brand)"
                --size="14px"
                icon={Dot}/>
            { item.name }
        </a>
    {/each}
</div>
<style>
.sidebar {
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 80px;
}

.sidebar .item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: inherit;
    font-size: 18px;
    font-weight: 600;
}

.sidebar .item:last-child {
    border-bottom: none;
}
</style>