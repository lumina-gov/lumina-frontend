export type EventType = {
    link: string,
    date: {
        time: {
            hour: string,
            minutes: string,
            pm: boolean
        },
        day: number,
        month: string,
        year: number
    },
    title: string,
    type: string,
    img: string,
    location: string
}