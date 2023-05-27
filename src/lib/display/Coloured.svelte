<script lang="ts">
export let color: "brand" | "red" = "brand"
</script>
<span class={color}><slot/></span>
<style lang="stylus">
@import variables

span
    color $brand
    display inline-flex
    &.red
        color $red
</style>