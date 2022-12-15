import type { InfoBoxType } from '$lib/components/general_components/general_components_types'

export type RightsDutiesIntro = {
    heading: string,
    icon: any,
    paragraphs: string[],
    positiveRightsHeading: string,
    positiveRights: string[],
    positiveExplanation: string,
    negativeRightsHeading: string,
    negativeRights: string[],
    negativeExplanation: string,
    infoBox: InfoBoxType
}