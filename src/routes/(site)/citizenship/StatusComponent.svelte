<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import StatusCard from "./StatusCard.svelte"
import ClockTimeFour from "svelte-material-icons/ClockTimeFour.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import site_data from "$lib/data/site_data"
import Discord from "svelte-material-icons/Discord.svelte"

</script>

<Tag>Citizenship</Tag>
<Heading right_icon={Settlement}>Citizenship Status</Heading>
<StatusCard
    left_icon={ClockTimeFour}
    title="Status">Pending</StatusCard>
<VerticalLayout>
    <Paragraph>
        We'll let you know the next steps as we continue to build our systems.
    </Paragraph>
    <Paragraph>
        In the meantime, feel free to join our community Discord server if you would like to get involved and volunteer.
    </Paragraph>
    <FlexWrap>
        <Button
            href={site_data.socials.discord}
            hug={true}
            right_icon={Discord}>
            Join Discord
        </Button>
        <Button
            style="translucent"
            href="/"
            hug={true}
            right_icon={Apps}>
            Open Hub
        </Button>
    </FlexWrap>
</VerticalLayout>