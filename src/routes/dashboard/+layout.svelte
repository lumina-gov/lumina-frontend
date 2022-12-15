<script lang="ts">
import type { PageData } from "./$types"
export let data: PageData
import Sidebar from "./Sidebar.svelte"
</script>
<div class="app">
    <Sidebar bind:user={data.user_wrapper.user}/>
    <div class="content">
        <slot/>
    </div>
</div>
<style lang="stylus">
.app
    display flex
    height 100%

.content
    flex 1
    overflow-y auto
    height 100vh
    display flex
    flex-direction column

</style>