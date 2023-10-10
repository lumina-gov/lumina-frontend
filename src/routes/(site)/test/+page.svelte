<script lang="ts">
import { env } from "$env/dynamic/public"
import type { Prop } from "$lib/utils/typed_props.js"
import { Content } from "@builder.io/sdk-svelte"
import TestComponent from "./TestComponent.svelte"

export let data

let custom_components: Prop<Content, "customComponents"> = [
    {
        name: "TestComponent",
        component: TestComponent,
        canHaveChildren: true,
        inputs: [
            {
                name: "children",
                type: "uiBlocks",
                // hideFromUI: true,
                defaultValue: [
                    {
                        "@type": "@builder.io/sdk:Element",
                        component: { name: "Text", options: { text: "I am child text block!" } }
                    }
                ],
            }
        ],
    // defaultChildren: [
        //     {
        //         "@type": "@builder.io/sdk:Element",
        //         component: { name: "Text", options: { text: "I am child text block!" } }
        //     }
        // ]

    }
]

</script>
<div>
    <Content
        apiKey={env.PUBLIC_BUILDERIO_KEY}
        content={data.content}
        customComponents={custom_components}
        model="page"/>
</div>