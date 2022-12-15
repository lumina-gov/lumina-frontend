export type NewsCardType = {
    tag: {
        text: string,
        color: string
    },
    date: {
        dayAsNumber: number,
        month: string,
        year: number
    },
    title: string,
    author: {
        name: string,
        img: string
    }
}