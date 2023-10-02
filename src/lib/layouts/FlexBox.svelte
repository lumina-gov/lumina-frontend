<div class="flexbox">
    <slot/>
</div>
<style>
.flexbox {
    display: flex;
    flex-direction: var(--flex-direction, row);
    flex-wrap: var(--flex-wrap, wrap);
    justify-content: var(--justify-content, flex-start);
    align-items: var(--align-items, flex-start);
    align-content: var(--align-content, flex-start);
    gap: var(--gap, 0);
    width: var(--width);
    height: var(--height);
}
</style>