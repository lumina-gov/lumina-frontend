<script lang="ts">
import type { InfoCardType } from "$lib/components/jobs/jobs_types"

export let info: InfoCardType

</script>

<div class="main">
    <div class="icon">
        <svelte:component this={info.icon}/>
    </div>
    <div class="text">
        {info.text}
    </div>
</div>

<style lang="stylus">
@import 'variables'

.main
    display flex
    margin-right 10px
    color white
.text
    font-size: 14px
    font-weight 500
    margin auto 0
    text-transform uppercase

.icon
    font-size 20px
    width 20px
    margin-right 5px
    height 20px


</style>