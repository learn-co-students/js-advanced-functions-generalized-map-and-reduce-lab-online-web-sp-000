// Add your functions here

function map(object, callback){
    const array = []
    for (const key in object){
        array.push(callback(object[key]))
    }
    return array
    
}

function reduce(object, callback, accumulator) {
    const keys = Object.keys(object)
    let i = 1
  
    if (accumulator) {
      i = 0
    } else {
      accumulator = object[keys[0]]
    }
  
    for (i; i < keys.length; i++) {
      accumulator = callback(accumulator, object[keys[i]])
    }
    return accumulator
  }