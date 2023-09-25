<script lang="ts">
import Alert from "svelte-material-icons/Alert.svelte"
export let error: string
</script>
<div class="error-wrapper">
    <div class="icon">
        <Alert/>
    </div>
    <div class="error">
        { error }
    </div>
</div>
<style>
.error-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    & .icon {
        color: var(--red);
    }
    & .error {
        font-weight: 500;
    }
}
</style>