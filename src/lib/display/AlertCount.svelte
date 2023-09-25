<script lang="ts">
export let count: number
</script>
<div class="alert-count">
    { count }
</div>
<style>

.alert-count {
    padding: 2px 8px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 100%;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
}
</style>