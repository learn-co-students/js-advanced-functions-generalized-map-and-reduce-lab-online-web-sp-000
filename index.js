function map(sourceArray, funct) {
    let arr = []
    for(let i =  0; i < sourceArray.length; i++) {
        arr.push(funct(sourceArray[i]))
    }
    return arr
}

function reduce(obj, cb, accumulator) {
    const keys = Object.keys(obj)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = obj[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      accumulator = cb(accumulator, obj[keys[i]])
    }
    return accumulator
  }
