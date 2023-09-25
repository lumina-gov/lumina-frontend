<script>
import LogoLoading from "$lib/display/LogoLoading.svelte"

export let fixed = false
</script>
<div
    class="overlay-spinner"
    class:fixed>
    <LogoLoading/>
</div>

<style>
.overlay-spinner {
    display: flex;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 20;
    &.fixed {
        position: fixed;
    }
}
</style>

