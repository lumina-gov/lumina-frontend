<script>
import { page } from "$app/stores"
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Settlement from "$lib/icons/Settlement.svelte"

$: url = $page.url

</script>
<Card
    align_items="flex-start"
    gap="16px"
    padding="16px">
    <Paragraph>You must be logged in to access this section</Paragraph>
    <Button
        style="branded"
        href="/auth?redirect={url.toString()}"
        right_icon={Settlement}
        text="Start" />
</Card>