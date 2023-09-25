<script lang="ts">
import Input from "$lib/controls/Input.svelte"
import Heading from "$lib/display/Heading.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Text from "svelte-material-icons/Text.svelte"
import { icons, type Component } from "./component"

export let active_component_id: string | null
export let components: Record<string, Component>

$: component = active_component_id ? components[active_component_id] : null
</script>
<div class="editor">
    {#if component}
        <VerticalLayout gap={16}>
            <Heading
                left_icon={icons[component.type]}
                level={3}>
                Editing { component.type }
            </Heading>
            <Input
                name="{component.type} name"
                left_icon={Text}
                placeholder="Unnamed {component.type}"
                bind:value={ component.name } />
            <hr>
        </VerticalLayout>
    {:else}
        <div class="placeholder">
            Select a component to edit it
        </div>
    {/if}
</div>
<style>
.editor {
    padding: 16px;
    height: 100%;
    border-radius: 6px;
    background: rgba(var(--white-rgb), 0.04);
    overflow-y: auto;
}

.placeholder {
    opacity: 0.5;
}
</style>