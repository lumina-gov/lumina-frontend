<script lang="ts">
import { serializeSchema } from "$lib/utils/schema"
import type { Thing, WithContext } from "schema-dts"

export let schema: Thing | WithContext<Thing>
</script>
<svelte:head>
    {@html serializeSchema(schema)}
</svelte:head>