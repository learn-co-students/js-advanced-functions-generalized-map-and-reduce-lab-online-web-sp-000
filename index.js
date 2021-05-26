// Add your functions here
const map = (arr, fn) => {
    const newArr = []
    arr.forEach(item => {
        newArr.push(fn(item))
    })
    return newArr
}

const reduce = (arr, fn, statrVal) => {
    arr.forEach(item => {
        let total
        let thing = fn(item, statrVal)
        console.log(thing)
        total += thing
    })
}