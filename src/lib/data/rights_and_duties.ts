import type { SvelteComponent } from "svelte"
import ArrowDecision from "svelte-material-icons/ArrowDecision.svelte"
import Pistol from "svelte-material-icons/Pistol.svelte"
import PlusThick from "svelte-material-icons/PlusThick.svelte"

type Duty = {
    name: string
    icon: typeof SvelteComponent
    description: string
    active: boolean
  }
  type Right = Duty & {
    type: "positive" | "negative"
  }
  
  export const rights: Right[] = [
    {
        name:"FREE HEALTHCARE",
        description: "Free healthcare, including dental.",
        active: true,
        icon: PlusThick,
        type: "positive"
    },
    {
        name:"OWN WEAPONS",
        description: "After mandatory civil service & background checks, the right to own hand weapons and military vehicles.",
        active: true,
        icon: Pistol,
        type: "negative"
    },
    {
        name:"FREE SPEECH",
        description: "The right to speak freely without physical harm, and to criticise any idea, any person, any organisation, OR any group.",
        active: true,
        icon: ArrowDecision,
        type: "negative"
    },
  ]
  export const duties: Duty[] = []