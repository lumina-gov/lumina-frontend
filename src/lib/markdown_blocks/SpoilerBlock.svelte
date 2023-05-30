<script lang="ts">
import type { ContainerDirective } from "mdast-util-directive"
import BlocksArray from "./BlocksArray.svelte"

export let block: ContainerDirective

</script>
<details>
    <summary>Spoiler</summary>
    <div class="content">
        <BlocksArray blocks={block.children}/>
    </div>
</details>
<style lang="stylus">
@import variables

details
    border 1px solid transparify(white, 10%)
    width 100%
    border-radius 8px
    overflow hidden
    summary
        padding 8px 16px
        cursor pointer
        font-weight bold
        outline none
        &:hover, &:focus
            background-color transparify(white, 10%)

    .content
        padding 16px
</style>