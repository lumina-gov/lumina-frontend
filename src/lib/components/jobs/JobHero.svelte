<script lang="ts">
import JobSection from "$lib/components/jobs/JobSection.svelte"
import type { JobField } from "$lib/components/jobs/jobs_types"

import CodeTags from "svelte-material-icons/CodeTags.svelte"
import Clock from "svelte-material-icons/Clock.svelte"
import Wifi from "svelte-material-icons/Wifi.svelte"
import Brush from "svelte-material-icons/Brush.svelte"
import Text from "svelte-material-icons/Text.svelte"
import Hammer from "svelte-material-icons/Hammer.svelte"
import Settlement from "$lib/icons/Settlement.svelte"

export let jobFields: JobField[] = [
    {
        title: "Software",
        jobs: [
            {
                title: "Backend Engineer",
                icon: CodeTags,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            },
            {
                title: "Frontend Engineer",
                icon: CodeTags,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            },
            {
                title: "Deployment Engineer",
                icon: CodeTags,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            },

        ]
    },
    {
        title: "Design",
        jobs: [
            {
                title: "UX Design",
                icon: Brush,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            },
            {
                title: "Video Editor",
                icon: Brush,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            },
            {
                title: "Content Writer",
                icon: Text,
                attributes: [
                    {
                        icon: Clock,
                        text: "Volunteer",
                    },
                    {
                        icon: Wifi,
                        text: "Remote",
                    }
                ]
            }

        ]
    },
    {
        title: "Settlement",
        jobs: [
            {
                title: "Welder",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            },
            {
                title: "Plumber",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            },
            {
                title: "Concreter",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            },
            {
                title: "Power Engineer",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            },
            {
                title: "Civil Engineer",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            },
            {
                title: "Electrical Engineer",
                icon: Hammer,
                attributes: [
                    {
                        icon: Clock,
                        text: "Future",
                    },
                    {
                        icon: Settlement,
                        text: "Settlement",
                    }
                ]
            }
        ]
    }
]
</script>

<div class="job-info">
    <div class="header">
        <h2 class="job-heading">
            Open positions
        </h2>
        <div class="job-description">
            <p>
                We are a technology driven society comprised of principled and
                disciplined people bonded by deeply held mission: to
                create a modern solution to governance.
            </p>
            <p>
                If you wish to join our team, apply for citizenship and then join our
                community Discord for information on how to start helping.
            </p>
        </div>
    </div>
    <div class="jobs-wrapper">
        {#each jobFields as jobField}
            <JobSection bind:jobField />
        {/each}
    </div>
</div>

<style lang="stylus">
.job-info
    display flex
    flex-direction column
    align-items center
    max-width 1000px
    width 100%
    margin 0 auto

.header
    display flex
    flex-direction column
    align-items center
    max-width 600px
    width 100%

.job-heading
    font-size 40px
    font-weight 600
    margin 0
    padding 0

.job-description
    opacity 0.6
    text-align center
    line-height 28px

.jobs-wrapper
    display flex
    flex-direction column
    gap 40px
    padding-top 40px
    width 100%

</style>