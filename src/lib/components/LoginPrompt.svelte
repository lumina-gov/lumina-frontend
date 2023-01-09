<script>
import Card from "$lib/cards/Card.svelte"
import Button from "$lib/controls/Button.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"

</script>
<Card
    align_items="flex-start"
    gap="16px"
    padding="16px">
    <Paragraph>You must be logged in to access this section</Paragraph>
    <FlexWrap>
        <Button
            style="translucent"
            href="/signin"
            right_icon={ExitToApp}
            text="Sign in" />
        <Button
            style="branded"
            href="/onboarding"
            right_icon={Settlement}
            text="Create account"
        />
    </FlexWrap>
</Card>