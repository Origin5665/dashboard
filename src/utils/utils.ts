export const  waiting = (ms: number, data?: unknown) => new Promise(resolve => {
    if (data) {
        console.log('Data:', data)
    }
    setTimeout(resolve, ms)
})