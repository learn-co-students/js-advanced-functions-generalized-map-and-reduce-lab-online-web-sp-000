// Add your functions here
function map(array, change) {
    let x = []
    for(let i = 0; i < array.length; i++) {
        let base = array[i]
        x.push(change(base))
    }
    return x
}

function reduce(array, change, optVal) {
    let x = (!!optVal) ? optVal : array[0]
    let i = (!!optVal) ? 0 : 1
    for (; i < array.length; i++) {
        x = change(array[i], x)
      }
    
      return x;
}

