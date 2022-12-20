/<!-- <script lang="ts">
import TopHero from "$lib/components/banners/heros/TopHero.svelte"
import RightsIntroBlock from "$lib/components/pages/rights_and_duties/RightsIntroBlock.svelte"
import IAmAPicker from "$lib/components/general_components/IAmAPicker.svelte"

import Lumina from "$lib/icons/Lumina.svelte"
import AirplaneLanding from "svelte-material-icons/AirplaneLanding.svelte"
import Home from "svelte-material-icons/Home.svelte"
import Web from "svelte-material-icons/Web.svelte"
import ScriptText from "svelte-material-icons/ScriptText.svelte"
import RightsDutiesDisplayBlock from "$lib/components/pages/rights_and_duties/RightsDutiesDisplayBlock.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import ShieldLock from "svelte-material-icons/ShieldLock.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Handshake from "svelte-material-icons/Handshake.svelte"
import BookOpenPageVariant from "svelte-material-icons/BookOpenPageVariant.svelte"
import Pistol from "svelte-material-icons/Pistol.svelte"
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte";
import Text from "svelte-material-icons/Text.svelte";
import Information from "svelte-material-icons/Information.svelte";

let heroInfo = {
    titleExcludingLastWord: "rights and",
    highlightedWord: "duties",
    subtitle: "A core difference",
    descriptionParagraphs: [
        "Most governments give their citizens rights, but no duties.",
        "For example, Lumina believe that all citizens should have the right to vote on laws.",
        "However, for this to work, citizens have the duty of being an intelligent and independent free-thinker.",
        "For our society to function, it is your duty to fulfill your duties."
    ],
    buttons: [
        {
            text: "Read your rights",
            link: "/",
            branded: true,
            rightIcon: ChevronDown
        },
        {
            text: "Become a citizen",
            link: "/",
            rightIcon: ChevronRight
        },
    ],
    img: "/images/tank_man.png"
}

let introInfo = {
    icon: Text,
    heading: "How to read your rights and duties",
    paragraphs: [
        "In Lumina, we strive to provide citizens with many rights, as well duties they need to fulfill in order to maintain order in society.",
        "We strive to ensure that all rights for citizens are actually provided to citizens, as some rights require active fulfillment (eg: right to education)."
    ],
    infoBox: {
        icon: {
            type: Information,
            size: 22,
            color: "rgb(45, 55, 68)"
        },
        heading: "Information about rights & duties",
        paragraphs: [
            "There are two types of rights, rights that oblige either inaction (negative rights), or action (positive rights). Some examples of both rights below."
        ],
    },
    positiveRightsHeading: "Positive right examples",
    positiveRights: [
        "right to housing",
        "right to food",
        "right to free healthcare"
    ],
    positiveExplanation: "These types of rights require someone to actively provide them.",
    negativeRightsHeading: "Negative right examples",
    negativeRights: [
        "freedom of speech",
        "freedom from violent crime",
        "freedom of religion"
    ],
    negativeExplanation: "These types of rights require someone to actively deny them.",
}

let pickerInfo = {
    heading: "I am a",
    choices: [
        { icon: Lumina, text: "Citizen" },
        { icon: AirplaneLanding, text: "Tourist" },
        { icon: Home, text: "Resident" },
        { icon: Web, text: "Diplomat" }
    ]
}

let detailedInfoSections = [
    {
        headerInfo: {
            icon: ScriptText,
            heading: "Your Rights",
            paragraphs: [
                "Read the rights of citizens, tourists, residents and more."
            ]
        },
        displayInfo: [
            {
                icon: BookOpenPageVariant,
                type: "Right To",
                title: "Free Education",
                description: "The right to free education in subjects: which do not cause division in society; and: lead to employment; or further scientific knowledge; or create technological advancement; or philosophy;",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            },
            {
                icon: Pistol,
                type: "Right To",
                title: "Bear Arms",
                description: "After mandatory military service, background checks, citizens may have the right to bear arms.",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            },
            {
                icon: Pistol,
                type: "Right To",
                title: "Bear Arms",
                description: "After mandatory military service, background checks, citizens may have the right to bear arms.",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            }
        ]
    },
    {
        headerInfo: {
            heading: "Your Duties",
            icon: Handshake,
            paragraphs: [
                "Read the duties of citizens, tourists, residents and more."
            ]
        },
        displayInfo: [
            {
                icon: BookOpenPageVariant,
                type: "Right To",
                title: "Free Education",
                description: "The right to free education in subjects: which do not cause division in society; and: lead to employment; or further scientific knowledge; or create technological advancement; or philosophy;",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            },
            {
                icon: Pistol,
                type: "Right To",
                title: "Bear Arms",
                description: "After mandatory military service, background checks, citizens may have the right to bear arms.",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            },
            {
                icon: Pistol,
                type: "Right To",
                title: "Bear Arms",
                description: "After mandatory military service, background checks, citizens may have the right to bear arms.",
                tags: [
                    { question: "Applies To", answerText: "Full Citizen", answerIcon: AccountGroup, color: "#492C9C" },
                    { question: "Enforced By", answerText: "Unenforced", answerIcon: ShieldLock, color: "#CECECE" },
                    { question: "Status", answerText: "Not provided", answerIcon: CloseCircle, color: "#E73D3D" }
                ]
            }
        ]
    }
]

</script>

<div class="hero-wrapper">
    <div class="inner-hero main-hero-layout">
        <TopHero bind:heroInfo />
    </div>
</div>
<div class="section-wrapper">
    <div class="inner-hero general">
        <RightsIntroBlock bind:introInfo />
    </div>
</div>
<div class="section-wrapper">
    <div class="inner-hero general">
        <IAmAPicker bind:pickerInfo />
    </div>
</div>
{#each detailedInfoSections as section}
    <div class="section-wrapper">
        <div class="inner-hero display-block">
            <RightsDutiesDisplayBlock headerInfo={section.headerInfo} displayInfo={section.displayInfo} />
        </div>
    </div>
{/each}

<style lang="stylus">
.hero-wrapper
    // min height instead of height because some devices have a smaller height
    // header is 80px, so we need to subtract that from the height
    min-height calc(100vh \- 80px)
    display flex
    flex-direction column
    .main-hero-layout
        flex 1 // take up all available space

.inner-hero
    max-width 1200px
    width 100%
    padding 40px 20px
    margin 0 auto
    display flex
    flex-direction column

.main-hero-layout
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 40px
    align-items center
    padding-top 60px
    padding-bottom 40px

.section-wrapper
    display flex
    border-top 1px solid #E6E6E6
    border-bottom 1px solid #E6E6E6

.general
    max-width 800px

.display-block
    max-width 900px

</style> -->