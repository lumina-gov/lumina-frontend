<script lang="ts">
export let max_width = 1200
export let gap = 0
</script>
<div class="inner" style="
    --max-width: {max_width}px;
    --gap: {gap}px;
">
    <slot/>
</div>
<style lang="stylus">

.inner
    max-width var(--max-width)
    width 100%
    margin 0 auto
</style>