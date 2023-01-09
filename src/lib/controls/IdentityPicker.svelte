<script lang="ts">
import Segment from "$lib/controls/Segment.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import Dropdown from "./Dropdown.svelte"
import Edit from "svelte-material-icons/Pencil.svelte"
import Input from "./Input.svelte"
import Text from "svelte-material-icons/Text.svelte"
import Heading from "$lib/display/Heading.svelte"
import AccountCircle from "svelte-material-icons/AccountCircle.svelte"
import Close from "svelte-material-icons/Close.svelte"
import ClickoutRegion from "./ClickoutRegion.svelte"
import Inside from "./Inside.svelte"
import Icon from "$lib/display/Icon.svelte"

export let first_name: string
export let last_name: string

let toggled = false

</script>
<InputWrapper name="Confirm Your Identity">
    <ClickoutRegion clicked_outside={() => toggled = false}>
        <div>
            <Inside>
                <Segment
                    right_icon={Edit}
                    text={`${first_name} ${last_name}`}
                    on:click={ () => toggled = !toggled }/>
            </Inside>
        </div>
        {#if toggled}
            <Inside>
                <Dropdown max_width="500px">
                    <div class="group">
                        <div class="space-between">
                            <Heading
                                left_icon={AccountCircle}
                                level={4}>Update Identity</Heading>
                            <Icon
                                icon={Close}
                                on:click={ () => toggled = !toggled }/>
                        </div>
                        <div class="input-group">
                            <Input
                                name={"First Name"}
                                left_icon={Text}
                                bind:value={ first_name }
                            />
                            <Input
                                name={"Last Name"}
                                left_icon={Text}
                                bind:value={ last_name }
                            />
                        </div>
                    </div>
                </Dropdown>
            </Inside>
        {/if}
    </ClickoutRegion>
</InputWrapper>
<style lang="stylus">
@import 'variables'

.group
    padding 16px
    display grid
    gap 16px

.space-between
    display flex
    justify-content space-between
    align-items center

.input-group
    display grid
    gap 16px
    grid-template-columns repeat(auto-fit, minmax(150px, 1fr))

</style>