<script lang="ts">
import SingleSegment from "$lib/controls/SingleSegment.svelte"
import { tick } from "svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import { icons, type Component } from "./component"

export let component: Component
export let components: Record<string, Component>
export let component_els: Record<string, HTMLElement>
export let active_component_id: string | null

let options: Array<"Body" | "Position" | "Role"> = [
    "Body",
    "Position",
    "Role"
]

async function add_child(type: "Body" | "Position" | "Role") {
    const id = Math.random().toString(36).slice(2)
    components[id] = {
        name: "",
        id,
        type,
        children: []
    }
    component.children.push(id)
    component = component
    components = components
    await tick()
    active_component_id = id
}

$: active = active_component_id === component.id
$: active && component_els[component.id] ? component_els[component.id].scrollIntoView({ behavior: "smooth", block: "center", inline: "center"}) : null


</script>
<div class="container">
    <div
        bind:this={ component_els[component.id] }
        class="component"
        class:active
        role="button"
        tabindex="0"
        on:click={ () => active_component_id = component.id }
        on:keyup={ e => e.key === "Enter" && (active_component_id = component.id) }>
        <div class="inner-component">
            <SingleSegment
                get_icon={type => icons[type]}
                left_icon={icons[component.type]}
                options={options}
                value={component.type}
                on:select={ e => e.detail && null }
            />
            <div
                class="name"
                class:placeholder={ component.name === "" }>
                { component.name || "Unnamed" }
            </div>
        </div>
        {#if active}
            <div class="add-child">
                <SingleSegment
                    get_icon={type => icons[type]}
                    left_icon={Plus}
                    options={options}
                    placeholder=""
                    on:select={ e => e.detail && add_child(e.detail) }
                />
            </div>
        {/if}
    </div>
    <div class="sub-components">
        {#each component.children as child}
            <svelte:self
                bind:component_els
                bind:active_component_id
                bind:component={ components[child] }
                bind:components/>
        {/each}
    </div>
</div>
<style lang="stylus">
@import variables

.name
    font-weight 500
    font-size 18px
    &.placeholder
        color transparify(white, 50%)

.inner-component
    display flex
    flex-direction column
    gap 8px

.add-child
    position absolute
    top calc(100% + 24px)
    z-index 2

.component
    position relative
    background transparify(white, 4%)
    border-radius 6px
    padding 16px
    display flex
    justify-content center
    &:focus
        outline none
    &.active
        background transparify(white, 8%)
        outline 1px solid $brand
        outline-offset 2px


.container
    display flex
    flex-direction column
    align-items center
    gap 60px

.sub-components
    display flex
    flex-direction row
    justify-content center
    gap 24px
</style>
