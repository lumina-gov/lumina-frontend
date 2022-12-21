export default async (promise: Promise<unknown>, subscriber: (value: boolean) => unknown)=> {
    subscriber(true)
    try {
        await promise
        subscriber(false)
    } catch (err) {
        subscriber(false)
        throw err
    }
}