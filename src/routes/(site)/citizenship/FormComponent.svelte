<script lang="ts">
import { page } from "$app/stores"
import { get_user } from "$lib/api/user"
import IdentityPicker from "$lib/controls/IdentityPicker.svelte"
import Input from "$lib/controls/Input.svelte"
import MultiSegment from "$lib/controls/MultiSegment.svelte"
import Segment from "$lib/controls/Segment.svelte"
import SingleSegment from "$lib/controls/SingleSegment.svelte"
import { countries } from "$lib/data/countries"
import { ethnicities } from "$lib/data/ethnicities"
import { occupations } from "$lib/data/occupations"
import { skills } from "$lib/data/skills"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import { MessageType } from "$lib/types/message"
import type { User } from "$lib/types/user"
import future from "$lib/utils/future"
import SwapHorizontal from "svelte-material-icons/SwapHorizontal.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Calendar from "svelte-material-icons/Calendar.svelte"
import Job from "svelte-material-icons/HammerScrewdriver.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Button from "$lib/controls/Button.svelte"
import Heading from "$lib/display/Heading.svelte"
import Passport from "svelte-material-icons/Passport.svelte"

$: data = $page.data

export let user: User
export let loading: boolean

enum Sexes {
    Male = "Male",
    Female = "Female",
    Other = "Other"
}

let sexes = Object.values(Sexes)

type CitizenshipRegistration = {
    first_name: string,
    last_name: string,
    sex: null | Sexes
    country_of_citizenship: typeof countries,
    date_of_birth: string
    country_of_residence: typeof countries[number] | null
    country_of_birth: typeof countries[number] | null
    skills: string[][],
    occupations: string[][],
    ethnic_groups: typeof ethnicities[number][]
}

let citizenship_registration: CitizenshipRegistration = {
    first_name: user.first_name,
    last_name: user.last_name,
    sex: null,
    date_of_birth: "",
    country_of_citizenship: [],
    country_of_residence: null,
    country_of_birth: null,
    skills: [],
    occupations: [],
    ethnic_groups: []
}

async function register() {
    let normalised = {
        ...citizenship_registration,
        country_of_citizenship: citizenship_registration.country_of_citizenship.map(c => c.code),
        country_of_residence: citizenship_registration.country_of_residence?.code,
        country_of_birth: citizenship_registration.country_of_birth?.code,
        skills: citizenship_registration.skills.map(s => s[0]),
        occupations: citizenship_registration.occupations.map(o => o[0]),
        date_of_birth: new Date(citizenship_registration.date_of_birth).getTime(),
    }

    if (isNaN(normalised.date_of_birth)) {
        data.alerts.create_alert(MessageType.Error, "Invalid date of birth")
        return
    }
    if (normalised.sex === null) {
        data.alerts.create_alert(MessageType.Error, "You must select a sex")
        return
    }
    if (normalised.country_of_residence === null) {
        data.alerts.create_alert(MessageType.Error, "You must select a country of residence")
        return
    }
    if (normalised.country_of_birth === null) {
        data.alerts.create_alert(MessageType.Error, "You must select a country of birth")
        return
    }
    if (normalised.country_of_citizenship.length === 0) {
        data.alerts.create_alert(MessageType.Error, "You must select a country of citizenship")
        return
    }
    if (normalised.ethnic_groups.length === 0) {
        data.alerts.create_alert(MessageType.Error, "You must select at least one ethnic group")
        return
    }

    let { errors } = await data.graph.req`message {
        create_citizenship_application(${normalised})
    }`

    if (errors.length > 0) {
        errors.map((error: string) => data.alerts.create_alert(MessageType.Error, error))
        return
    }

    data.alerts.create_alert(MessageType.Success, "Citizenship application created")

    user = await get_user(data.graph, data.alerts) as User
}
</script>
<Heading right_icon={Passport}>Citizenship Registration</Heading>
<div class="inputs">
    <IdentityPicker bind:first_name={citizenship_registration.first_name} bind:last_name={citizenship_registration.last_name}/>
    <InputWrapper name="Sex">
        <div class="horizontal-segments">
            {#each sexes as sex}
                <Segment
                    style={citizenship_registration.sex == sex ? "branded" : "translucent"}
                    on:click={() => citizenship_registration.sex = sex}
                    text={sex}/>
            {/each}
        </div>
    </InputWrapper>
    <div class="date-wrapper">
        <Input
            name="Date of birth"
            left_icon={Calendar}
            placeholder="Enter Date"
            type="date"
            bind:value={citizenship_registration.date_of_birth}/>
    </div>
    <div class="horizontal-inputs">
        <MultiSegment
            name="Country of Citizenship"
            bind:values={citizenship_registration.country_of_citizenship}
            options={search => countries.filter(country => new RegExp(search, "ig").test(country.name))}
            let:search>
            <svelte:fragment slot="selected" let:value>
                <Segment text={value.name}/>
            </svelte:fragment>
            <svelte:fragment slot="option" let:option>
                <Segment text={option.name}/>
            </svelte:fragment>
        </MultiSegment>
        <MultiSegment
            name="Ethnic Group"
            bind:values={citizenship_registration.ethnic_groups}
            options={search => ethnicities.filter(ethnicity => new RegExp(search, "ig").test(ethnicity))}
            allow_other={query => query}
            let:search>
            <svelte:fragment slot="selected" let:value>
                <Segment text={value}/>
            </svelte:fragment>
            <svelte:fragment slot="option" let:option>
                <Segment text={option}/>
            </svelte:fragment>
        </MultiSegment>
    </div>
    <div class="horizontal-inputs">
        <SingleSegment
            name="Country of Residence"
            get_title={value => value.name}
            placeholder="Select Country"
            right_icon={SwapHorizontal}
            bind:value={citizenship_registration.country_of_residence}
            options={search => countries.filter(country => new RegExp(search, "ig").test(country.name))}/>
        <SingleSegment
            name="Country of Birth"
            get_title={value => value.name}
            placeholder="Select Country"
            right_icon={SwapHorizontal}
            bind:value={citizenship_registration.country_of_birth}
            options={search => countries.filter(country => new RegExp(search, "ig").test(country.name))}/>
    </div>
    <div class="horizontal-inputs">
        <MultiSegment
            name="Occupation"
            options={search => occupations.filter(occupation => occupation.some(alias => new RegExp(search, "ig").test(alias)))}
            bind:values={citizenship_registration.occupations}
            allow_other={query => [query]}
            let:search>
                <svelte:fragment slot="selected" let:value>
                    <Segment
                        left_icon={Job}
                        right_icon={CloseCircle}
                        text={value[0]}/>
                </svelte:fragment>
                <svelte:fragment slot="option" let:option>
                    <Segment
                        left_icon={Job}>
                        {@html option[0].replace(new RegExp(search ? search : "$^", "ig"), match => `<strong>${match}</strong>`)}
                    </Segment>
                    <div class="aliases">
                        {@html
                            option.slice(1)
                                .map(alias => alias.replace(new RegExp(search ? search : "$^", "ig"), match => `<strong>${match}</strong>`))
                                .sort(a => new RegExp(search, "ig").test(a) ? -1 : 1)
                                .join(", ")
                        }
                    </div>
                </svelte:fragment>
        </MultiSegment>
        <MultiSegment
            name="Skills"
            options={search => skills.filter(skill => skill.some(alias => new RegExp(search, "ig").test(alias)))}
            bind:values={citizenship_registration.skills}
            allow_other={query => [query.trim()]}
            let:search>
                <svelte:fragment slot="selected" let:value>
                    <Segment
                        left_icon={Job}
                        right_icon={CloseCircle}
                        text={value[0]}/>
                </svelte:fragment>
                <svelte:fragment slot="option" let:option>
                    <Segment
                        left_icon={Job}>
                        {@html option[0].replace(new RegExp(search ? search : "$^", "ig"), match => `<strong>${match}</strong>`)}
                    </Segment>
                    <div class="aliases">
                        {@html
                            option.slice(1)
                                .map(alias => alias.replace(new RegExp(search ? search : "$^", "ig"), match => `<strong>${match}</strong>`))
                                .sort(a => new RegExp(search, "ig").test(a) ? -1 : 1)
                                .join(", ")
                        }
                    </div>
                </svelte:fragment>
        </MultiSegment>
    </div>
    <div>
        <Button right_icon={ChevronRight} hug={true} on:click={() => future(register(), status => loading = status)}>
            Register
        </Button>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.aliases
    opacity 0.5
    text-overflow ellipsis
    overflow hidden
    white-space: nowrap
    padding-top 8px
    padding-bottom 2px
    width 100%


.date-wrapper
    max-width 250px

.inputs
    display flex
    flex-direction column
    gap 24px

.horizontal-inputs
    display grid
    grid-template-columns 1fr 1fr
    gap 24px
    @media (max-width: 600px)
        grid-template-columns 1fr

.horizontal-segments
    display flex
    flex-wrap wrap
    gap 8px
</style>