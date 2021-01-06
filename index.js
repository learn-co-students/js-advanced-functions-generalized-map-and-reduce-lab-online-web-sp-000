// Add your functions here
function map(array, func){
    return array.map(x => func(x))
    
}

function reduce(array, func, start) {
    const reducer = (accumulator, item) => {
        return func(accumulator, item)
      };
      if (!!start) {
        return array.reduce(reducer, start)
      } else {
        return array.reduce(reducer)
      }
    
}