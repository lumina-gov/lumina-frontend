<script lang="ts">
import { applications } from "../applications"
import { serialize } from "bson"
import { tick } from "svelte"
import { gmutation } from "$lib/stores/graphql"
import { graphql } from "$lib/gql"
import type { PageData } from "./$types"
import Button from "$lib/controls/Button.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Input from "$lib/controls/Input.svelte"

export let data: PageData

let disabled = false
let application = applications[data.application_type]()

async function submit() {
    disabled = true
    await tick()
    let bson = serialize(application).toString()

// const res = await gmutation(graphql(`
    //     mutation submit($bson: String!, $t: ApplicationType!) {
    //         submitApplication(bson: $bson, applicationType: $t)
    //     }`), 
    //     {
    //         bson,
    //         t: data.application_type
    //     })

    // alert(res.data?.submitApplication)
}
</script>

<main>
    {#each application.questions as q}
        <div class="question">
            {#if q.type === "text"}
                <p>{ q.question }</p>
                <Input
                    name=""
                    bind:value={ q.answer }
                />
            {:else if q.type === "multipleChoice"}
                <p>{ q.question }</p>
                <div class="radio">
                    {#each q.options as option} 
                        <div>
                            <input
                                id={option}
                                name={q.question}
                                {disabled}
                                type="radio"
                                value={option}
                                bind:group={ q.answer }>
                            <label
                                style:margin-left="10px"
                                for={option}>{ option }</label>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
    <br>
    <Button
        {disabled}
        hug={true}
        right_icon={Settlement}
        on:click={ submit }>
        Submit
    </Button>
</main>

<style lang="stylus">
    main
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 100%
        gap: 30px

    .radio
        flex-direction: column
        display: flex
        gap: 10px   
        padding: 10px
        background: rgba(255,255,255,0.05)
        border-radius: 8px

    .question
        padding: 20px
        background: rgba(255,255,255,0.05)
        display: flex
        width: 100%
        max-width: 600px
        display: flex
        flex-direction: column
        justify-content: center
        border-radius: 8px

    
</style>