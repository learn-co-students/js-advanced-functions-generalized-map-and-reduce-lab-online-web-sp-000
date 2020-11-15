// Add your functions 

function map(source, callback) {
    let r = []
  
    for (let i = 0; i < source.length; i++) {
      let theElement = source[i]
      r.push(callback(theElement))
    }
  
    return r;
  }
  
  function reduce(source, callback, starting){
    let r = (!!starting) ? starting : source[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < source.length; i++) {
      r = callback(source[i], r)
    }
  
    return r;
  }