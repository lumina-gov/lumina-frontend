<script lang="ts">
import Alert from "svelte-material-icons/Alert.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Icon from "./Icon.svelte"

const icons = {
    "note": Information,
    "error": CloseCircle,
    "warning": Alert,
    "success": CheckCircle,
}

export let type: keyof typeof icons
</script>
<div class="callout {type}">
    <div class="icon">
        <Icon
            --size="24px"
            icon={icons[type]}/>
    </div>
    <div class="content">
        <slot/>
    </div>
</div>
<style>
.callout {
    display: flex;
    gap: 20px;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--white) 10%, transparent);
    border: 2px solid color-mix(in srgb, var(--white) 10%, transparent);
}

.callout.note {
    background: color-mix(in srgb, var(--blue) 10%, transparent);
    border-color: color-mix(in srgb, var(--blue) 50%, transparent);
    & .icon {
        color: var(--blue);
    }
}

.callout.error {
    background: color-mix(in srgb, var(--red) 10%, transparent);
    border-color: color-mix(in srgb, var(--red) 50%, transparent);
    & .icon {
        color: var(--red);
    }
}

.callout.warning {
    background: color-mix(in srgb, var(--yellow) 10%, transparent);
    border-color: color-mix(in srgb, var(--yellow) 50%, transparent);
    & .icon {
        color: var(--yellow);
    }
}

.callout.success {
    background: color-mix(in srgb, var(--green) 10%, transparent);
    border-color: color-mix(in srgb, var(--green) 50%, transparent);
    & .icon {
        color: var(--green);
    }
}
</style>