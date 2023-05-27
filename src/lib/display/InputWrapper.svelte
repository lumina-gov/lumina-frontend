<script lang="ts">
// This component renders the text of an input element and is used by various controls

export let name: string | undefined = undefined

</script>
{#if name}
    <div
        class="input-wrapper"
        on:click
        on:keypress>
        <span class="input-label">{ name }</span>
        <slot/>
    </div>
{:else}
    <slot/>
{/if}
<style lang="stylus">
@import variables;

.input-wrapper
    display flex
    flex-direction column
    gap 8px
    color white
    width 100%

.input-label
    font-size 14px
    font-weight 700
    text-transform uppercase
    opacity 0.4
</style>