<script lang="ts">
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import ChevronUp from "svelte-material-icons/ChevronUp.svelte"
import Icon from "./Icon.svelte"

export let question: string
export let toggled: boolean = false
</script>
<details
    class:toggled
    bind:open={ toggled }>
    <summary>
        <h3>
            { question }
        </h3>
        <Icon
            --size="24px"
            icon={toggled ? ChevronUp : ChevronDown}/>
    </summary>
    <div class="content">
        <slot/>
    </div>
</details>
<style>

details {
    border-left: 3px solid rgba(var(--white-rgb), 0.2);
    width: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.toggled {
        background: rgba(var(--white-rgb), 0.05);
    }
}

h3 {
    width: 100%;
}

summary {
    padding: 16px;
    list-style: none;
    width: 100%;
    display: flex;
    align-items: center;
    &:is(:hover, :focus, :focus-visible) {
        outline: 0;
        cursor: pointer;
        background: rgba(var(--white-rgb), 0.1);
    }
}

.content {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    gap: 16px;
}

</style>