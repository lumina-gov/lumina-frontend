<script lang="ts">
    import LuminaEdge from "$lib/icons/LuminaEdge.svelte"
    import Pillar from "./Pillar.svelte"

</script>
<div class="wrapper">
    <div class="logo">
        <LuminaEdge/>
    </div>
    <Pillar/>
</div>
<style lang="stylus">
@import "variables"

.wrapper
    display inline-flex
    gap 8px
    flex-direction column
    align-items center

.logo
    animation beacon 1.5s ease-in-out infinite
    font-size 80px
    display inline-flex
    color $brand

@keyframes beacon
    0%
        opacity: 1
    50%
        opacity: 0.3
    100%
        opacity: 1
</style>