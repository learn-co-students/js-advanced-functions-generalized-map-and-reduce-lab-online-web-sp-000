function map(srcArr, fn) {
    let newArr = []
    for (let i = 0; i < srcArr.length; i++) {
       const element = fn(srcArr[i])
       newArr.push(element)
    }
    return newArr     
 }




function reduce(array, fn, startingPoint){
    let i = 0
    let accumulator = startingPoint

    if (startingPoint === undefined) {
        accumulator = array[0]
        i = 1
    }


    for (;i < array.length; i++){
        accumulator = fn(array[i], accumulator) 
    }
    return accumulator
}