// Add your functions here
function map(sourceArray, uniqueCode){
    let newArray = []
    for(let i=0; i < sourceArray.length; i++){
        newArray.push(uniqueCode(sourceArray[i]))
    }
    return newArray
}

function reduce(sourceArray, uniqueCode, startingPoint){
    let value = !!startingPoint? startingPoint:sourceArray[0]
    let i = !!startingPoint? 0 : 1
    // so if the startingPoint exists and is true, then value is equal to the starting point and the i for the counter starts and the first index value for the source array.
    // if the startingPoint doesn't exist/is false, then the value is equal to the first element of the array and the counter starts at the 2nd element of the array.

    for(; i< sourceArray.length; i++){
        // there is just a ';' at the beginning of the for statment because i has already been declared
        value = uniqueCode(sourceArray[i], value)
        // this takes two values at a time to produce a new value.  This way you can compare the values or you can perform calculations betwwen the two to solve for mathematical and boolean problems -> queries?
    }
    return value
}
