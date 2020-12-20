// Add your functions here

const map = (sourceArray, callback) => {
    const newArray = []
    sourceArray.forEach(value => {
        newArray.push(callback(value))
    });
    return newArray
}

const reduce = (sourceArray, callback, startingVal = 0) => {
    let result
    let total = 0
    sourceArray.forEach(value => {
        total += value
        if (!value) {
            total = false
        } else {
            total = true
        }
    })
    result = callback(total, startingVal)

    return result
}