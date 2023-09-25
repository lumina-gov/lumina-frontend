<script lang="ts">
import InputWrapper from "$lib/display/InputWrapper.svelte"

let input_ref: HTMLTextAreaElement | null = null
export let name: string
export let placeholder = ""
export let value: string
</script>
<InputWrapper
    on:click={ () => input_ref && input_ref.focus() }
    bind:name>
    <textarea
        bind:this={ input_ref }
        {placeholder}
        bind:value/>
</InputWrapper>

<style>
textarea {
    padding: 16px;
    border-radius: 4px;
    align-items: center;
    cursor: text;
    display: flex;
    border: 0;
    min-height: 200px;
    width: 100%;
    color: white;
    outline: 0;
    resize: vertical;
    background: color-mix(white, rgba(255, 255, 255, 0.1), 10%);
}
</style>