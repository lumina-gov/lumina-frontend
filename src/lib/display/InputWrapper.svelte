<script lang="ts">
import Label from "./Label.svelte"

// This component renders the text of an input element and is used by various controls

export let name: string | undefined = undefined

</script>
{#if name}
    <div
        class="input-wrapper"
        on:click
        on:keypress>
        <Label text={name}/>
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
</style>