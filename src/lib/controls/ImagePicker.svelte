<script lang="ts">
import { page } from "$app/stores"
import Upload from "svelte-material-icons/Upload.svelte"
import { MessageType } from "$lib/types/message"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import Icon from "$lib/display/Icon.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"

let image_elm: HTMLDivElement
export let value: string | null = null
export let name: string | undefined

$: if(image_elm) {
    if (value) {
        image_elm.style.backgroundImage = `url(${value})`
    } else {
        image_elm.style.backgroundImage = "none"
    }
}

async function select () {
    if (value) {
        value = null
        return
    }
    let file_input = document.createElement("input")
    file_input.setAttribute("type", "file")
    file_input.setAttribute("accept", "image/*")
    let file_future = new Promise(resolve => file_input.addEventListener("change", resolve))
    file_input.click()
    await file_future
    let file = file_input.files?.[0]
    if (!file) return $page.data.alerts.create_alert(MessageType.Error, "No file selected")

    value = await new Promise(resolve => {
        let reader = new FileReader()
        reader.onload = e => resolve(e.target?.result as string)
        reader.readAsDataURL(file as File)
    })
    $page.data.alerts.create_alert(MessageType.Info, "File selected")
}

</script>
<InputWrapper {name}>
    <div
        bind:this={ image_elm }
        class="img-wrapper"
        class:has_image={ value }
        role="button"
        tabindex="0"
        on:keypress={ e => e.key === "Enter" && select() }
        on:click={ select }>
        <div class="icon">
            <Icon
                icon={value ? CloseCircle : Upload}
                size={24}/>
        </div>
    </div>
</InputWrapper>

<style lang="stylus">
@import variables

.img-wrapper
    width 60px
    height 60px
    background-color transparify(white, 8%)
    background-size cover
    background-repeat no-repeat
    background-position center
    border-radius 8px
    cursor pointer
    display flex
    overflow hidden
    color white
    justify-content center
    position relative
    align-items center
    border 1px solid transparify(white, 16%)
    .icon
        z-index 3
    &:hover
        &::after
            content ""
            position absolute
            top -1px
            left -1px
            right -1px
            bottom -1px
            background-color transparify(mix($brand, white, 70%), 40%)
            z-index 2
    &.has_image
        background-color none
        .icon
            display none
        &:hover
            .icon
                display flex

</style>