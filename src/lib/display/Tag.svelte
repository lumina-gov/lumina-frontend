<script lang="ts">
export let opacity = false
export let text = ""
</script>

<span
    class="tag"
    class:opacity>
    <div class="text">
        {#if $$slots.default}
            <slot />
        {:else}
            { text }
        {/if}
    </div>
</span>
<style>
.tag {
    padding: 0 2px;
    line-height: 1;
    font-weight: 600;
    display: inline-flex;
    border-radius: 4px;
    color: var(--color, var(--brand));
    background: color-mix(in srgb, var(--color, var(--brand)) 16%, transparent);

    & .text {
        padding: 3px 4px;
        line-height: 100%;
    }

    &.opacity {
        opacity: 0.5;
    }
}

</style>

