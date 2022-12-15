<script>
import Heading from "$lib/display/Heading.svelte"
import InfoBox from "$lib/display/InfoBox.svelte"
import AccountCircle from "svelte-material-icons/AccountCircle.svelte"
import Alert from "svelte-material-icons/Alert.svelte"
</script>

<div class="area">
    <Heading right_icon={AccountCircle}>Account Settings</Heading>
    <InfoBox
        icon={Alert}
        title="This feature is not developed yet"
        tag="Coming soon"
        color="red"/>
</div>

<style lang="stylus">
    @import 'variables'

.area
    padding 40px
    gap 32px
    display flex
    flex-direction column
    flex 1
</style>