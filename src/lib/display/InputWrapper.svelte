<script lang="ts">
// This component renders the text of an input element and is used by various controls

export let name: string // name of the input

</script>
<div class="input-wrapper" on:click>
    <span class="input-label">{name}</span>
    <slot/>

</div>
<style lang="stylus">
@import 'variables';

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