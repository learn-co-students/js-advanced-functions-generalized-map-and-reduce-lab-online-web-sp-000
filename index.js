// Add your functions here

function map(object, callback){
    const array = []
    for (const key in object){
        array.push(callback(object[key]))
    }
    return array
    
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