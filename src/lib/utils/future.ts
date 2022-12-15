export default async (promise: Promise<any>, subscriber: (value: boolean) => any)=> {
    subscriber(true)
    try {
        await promise
        subscriber(false)
    } catch (err) {
        subscriber(false)
        throw err
    }
}