<script lang="ts">
import Segment from "$lib/controls/Segment.svelte";
import type { SvelteComponent } from "svelte";
import Icon from "$lib/display/Icon.svelte"
export let icon : typeof SvelteComponent;
export let filter_name : string;
export let filter : string | undefined;
</script>

<Segment style={filter === filter_name ? "translucent" : "branded"} on:click={() => {
    filter = filter_name;
}}><Icon icon={icon}/> {filter_name}</Segment>