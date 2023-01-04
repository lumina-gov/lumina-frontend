<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Checkbox from "svelte-material-icons/CheckboxBlank.svelte"
import CheckboxMarked from "svelte-material-icons/CheckboxMarked.svelte"

export let usernames: string[]
export let username: string
export let date: Date

$: marked = usernames.includes(username)

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="date-picker" on:click={() => {
    if (marked) {
        usernames = usernames.filter(u => u !== username)
    } else {
        usernames = [...usernames, username]
    }
}}>
    <Icon icon={marked ? CheckboxMarked : Checkbox}/>
</div>