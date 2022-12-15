<script lang="ts">
import type { LayoutData } from "./$types"
import Footer from "./Footer.svelte"
import Header from "./Header.svelte"
import Rater from "./Rater.svelte"

export let data: LayoutData
</script>
<Header bind:user={data.user_wrapper.user}/>
<slot/>
<Rater/>
<Footer/>