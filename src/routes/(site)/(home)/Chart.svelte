<script lang="ts">
import Chart from "chart.js/auto"
import { onMount } from "svelte"

export let data: number[]
// interval in months
let interval = 3
let canvas: HTMLCanvasElement


$: clean_data = clean(data)
function clean(data: number[]): { year: string, month: string, count: number }[] {
    // start from the end
    let i = data.length
    // while the value is 0
    while (data[i - 1] === 0) {
        // decrement i
        i--
    }

    // add one 0 to the end
    data.push(0)

    // return the data from 0 to i
    let now = new Date()

    return data.slice(0, i + 1).map((num, i) => {
        let date = new Date(now.getFullYear(), now.getMonth() - i * interval, 1)
        return {
            year: date.toLocaleDateString("en-US", { year: "numeric" }),
            month: date.toLocaleDateString("en-US", { month: "short" }),
            count: num
        }
    }).reverse()
}

onMount(generate_canvas)

function generate_canvas() {
    let chart = new Chart(canvas, {
        type: "line",
        data: {
            labels: clean_data.map(({ year, month }) => `${month} ${year}`),
            datasets: [{
                cubicInterpolationMode: "monotone",
                label: "User Count",
                data: clean_data.map(({ count }) => count),
                fill: false,
                borderColor: "#7446F6",
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 60,
                        minRotation: 60,
                    }
                }
            }
        }
    })

    window.onresize = () => {
        chart.resize()
    }
}

</script>
<canvas
    bind:this={ canvas }
    height="min-content"
    width="min-content"/>
<style lang="stylus">
@import variables

canvas
    max-height 350px
    min-height 350px
</style>