<script lang="ts">
import { onMount, onDestroy } from "svelte"
import type { Object3D, Object3DEventMap } from "three"
type Countries = { features: object[] }

let container: HTMLDivElement
let resizeObserver: ResizeObserver

onMount(async () => {
    const { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight } = await import("three")
    const { default: ThreeGlobe } = await import("three-globe")
    const { default: countries } = await import("./map.geojson?raw")

    // Setting up the Three.js scene
    const scene = new Scene()
    const camera = new PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 1000)
    const renderer = new WebGLRenderer({ alpha: true })
    const light = new AmbientLight(0xFFFFFF, 1)

    camera.position.set(0, 0, 250)  // Offset camera to the right to get center-right positioning
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)


    // Adding the three-globe to the scene
    const globe = new ThreeGlobe()
        .hexPolygonsData((JSON.parse(countries) as Countries).features)
        .hexPolygonResolution(2)
        .hexPolygonMargin(0.2)
        .hexPolygonColor(() => "#FFFFFF30")
        .hexPolygonAltitude(0.01)
        .showAtmosphere(false)
        .showGlobe(false) as unknown as typeof ThreeGlobe & Object3D<Object3DEventMap>

    scene.add(globe)
    scene.add(light)

    // Render the scene
    function animate() {
        requestAnimationFrame(animate)

        // Rotate the globe around its polar axis
        globe.rotation.y -= 0.002

        renderer.render(scene, camera)
    }

    animate()


    resizeObserver = new ResizeObserver(() => {
        renderer.setSize(container.clientWidth, container.clientHeight)
        camera.aspect = container.clientWidth / container.clientHeight

        // if we are at mobile size, move the globe to the bottom
        if(container.clientWidth < 900) {
            globe.position.set(0, -50, 0)
            camera.position.set(0, 0, 300)
        } else {
            globe.position.set(100, 0, 0)
            camera.position.set(0, 0, 250)
        }
        camera.updateProjectionMatrix()
    })

    resizeObserver.observe(container)
})

onDestroy(() => {
    if(resizeObserver) resizeObserver.disconnect()
})

</script>
<div
    bind:this={ container }
    class="container"/>
<style>

.container {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
}

</style>
