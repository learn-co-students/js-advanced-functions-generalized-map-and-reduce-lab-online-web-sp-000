// Add your functions here
 function map(src, fn){
    let newSrc = []
     for (let i = 0; i < src.length; i++){
         newSrc.push(fn(src[i]))
     }
     return newSrc
 }

function reduce(src, fn, start = 0){
    let finalValue = (!!start) ? start : src[0]
    for (let i = (!!start) ? 0 : 1; i < src.length; i++){
        finalValue = fn(src[i], finalValue)
    }
    return finalValue
}