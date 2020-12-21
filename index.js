// Add your functions here

const map = (sourceArray, callback) => {
    const newArray = []
    sourceArray.forEach(value => {
        newArray.push(callback(value))
    });
    return newArray
}

const reduce = (sourceArray, callback, startingVal = 0) => {
    let storedVal = startingVal
    if (!sourceArray.every(Number)) {
      storedVal = true 
      for (let value of sourceArray) {
        storedVal = callback(value, storedVal)
      }
    } else {
        for (let value of sourceArray) {
          storedVal = callback(value, storedVal)
        } 
    }
    return storedVal
}