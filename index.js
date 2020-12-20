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
    if (sourceArray.every(Number)) {
      sourceArray.forEach(value => {
        total += value 
      });
    } else {
      sourceArray.forEach(value => {
        total = true
        if (!value) {
          total = false
        }
      });
    }
    result = callback(total, startingVal)  
    return result
}