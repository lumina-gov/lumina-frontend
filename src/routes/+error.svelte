<script lang="ts">
import { page } from "$app/stores"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Logo from "$lib/icons/Logo.svelte"
import Alert from "$icons/Alert.svelte"
import Button from "$lib/buttons/Button.svelte"
import Home from "$icons/Home.svelte"

$: error = $page.error as NonNullable<typeof $page.error>
</script>
<div class="area">
    <Tag color="red">
        Error
    </Tag>
    <div class="status">
        {$page.status}
    </div>
    <Heading left_icon={Alert} left_icon_color="red">
        {error.message}
    </Heading>
    <div class="code">
        <strong>Code</strong> {error.code}
    </div>
    <Button
        hug={true}
        href="/"
        style="translucent"
        left_icon={Home}>Go Home</Button>
</div>
<style lang="stylus">
.area
    padding 32px
    display flex
    flex-direction column
    align-items center
    gap 20px

.status
    font-size 4em
    font-weight 700

.code
    font-size 1.2em
    font-weight 600
</style>