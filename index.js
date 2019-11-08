// Add your functions here
let map = ( sourceArray, fun ) => {
    let newArray = []
    for ( let n of sourceArray ) {
      newArray.push( fun( n ) )
    }
    return newArray
  }

  let reduce = ( sourceArray, fun, memo ) => {

    for ( let n of sourceArray ) {
      if(memo == undefined)
        memo = n
      else
        memo = fun ( memo, n )
    }
    return memo
  }
