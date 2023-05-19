<script lang="ts">
import { PUBLIC_GRAPH_ENDPOINT } from "$env/static/public"
import { onMount } from "svelte"

let container: HTMLDivElement
export let data

onMount(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let global = <any>window
    const root = global.ReactDOM.createRoot(container)
    root.render(
        global.React.createElement(global.GraphiQL, {
            fetcher: global.GraphiQL.createFetcher({
                url: PUBLIC_GRAPH_ENDPOINT,
                // eslint-disable-next-line no-undef
                fetch(input: URL | Request | string, init?: RequestInit) {
                    return fetch(input, {
                        ...init,
                        headers: {
                            ...init?.headers,
                            ...(data.user_store.auth_token ? { Authorization: data.user_store.auth_token } : {})
                        },
                    })
                },
            }),
            defaultEditorToolsVisibility: true,
        })
    )
})
</script>

<svelte:head>
    <script
        crossorigin="anonymous"
        src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script
        crossorigin="anonymous"
        src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <link
        href="https://unpkg.com/graphiql/graphiql.min.css"
        rel="stylesheet" />
    <script
        crossorigin="anonymous"
        src="https://unpkg.com/graphiql/graphiql.min.js"></script>
</svelte:head>

<div
    bind:this={ container }
    id="graphiql" />

<style lang="stylus">
  :global(body)
    margin 0
    padding 0

  #graphiql
    width: 100vw
    height: 100vh
</style>
