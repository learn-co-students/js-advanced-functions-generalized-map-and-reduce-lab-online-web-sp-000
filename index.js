// Add your functions here
function map(arr, func){
    return arr.map(x => func(x))
}

function reduce(arr, func, start){
    if (start > 0 || start < 100){
       return arr.reduce(func, start)
    }
    else{
        return arr.reduce(func, 0)
    }
}