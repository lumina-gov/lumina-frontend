<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"
import { Blocks } from "@builder.io/sdk-svelte"
import type { BuilderBlock } from "@builder.io/sdk-svelte/lib/browser/types/builder-block"

export let children: Prop<Blocks, "blocks">
// export let builderBlock: BuilderBlock

</script>
<div class="wrapper">
    <!-- <slot/> -->
    <Blocks blocks={children}/>
</div>
<style>

.wrapper {
    padding: 20px;
    border: 1px solid #fff;
}

</style>