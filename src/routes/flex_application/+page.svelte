<script lang="ts">
import { applications } from "./applications"
import { serialize } from "bson"
import { tick } from "svelte"
import { gmutation } from "$lib/graphql"
import { graphql } from "$lib/gql"

let application = applications.citizenship()
let disabled = false

async function submit() {
    disabled = true
    await tick()
    let bson = serialize(application).toString()
    const res = await gmutation(graphql(`
	mutation submit($bson: String!) {
  		submitApplication(form: $bson)
	}	
	`), {
        bson
    })

    alert(res.data?.submitApplication)
}
</script>

{#each application.questions as q}
    {#if q.type === "text"}
        <p>{ q.question }</p>
        <input
            {disabled}
            bind:value={ q.answer }>
    {:else if q.type === "multipleChoice"}
        <p>{ q.question }</p>
        {#each q.options as option} 
            <input
                id={option}
                name={q.question}
                {disabled}
                type="radio"
                value={option}
                bind:group={ q.answer }>
            <label for={option}>{ option }</label>
        {/each}
    {/if}
{/each}
<br><br>
<button
    {disabled}
    on:click={ submit }>Submit</button>
