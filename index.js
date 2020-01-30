// Add your functions here
function map(array, applyFunction){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(applyFunction(array[i]))
    }
    return newArray;
}

function reduce(array, applyFunction, startPoint){
    let i = 0;
    let accumulatingVariable = 0;
    if (startPoint !== undefined){
        i = 0;
        accumulatingVariable = startPoint;
    } else {
        accumulatingVariable = array[0];
        i = 1;
    }
    for(; i<array.length; i++){
        accumulatingVariable = applyFunction(accumulatingVariable, array[i])
    }
    return accumulatingVariable;
}  






// function reduce(array, applyFunction, startPoint){

//     let accumulatingVariable = 0;
//     if (startPoint !== undefined){
//         accumulatingVariable = startPoint;
//     } else {
//         accumulatingVariable = 0;
//     }
//     for(let i=0; i<array.length; i++){
//         accumulatingVariable = applyFunction(accumulatingVariable, array[i], i, array)
//     }
//     return accumulatingVariable;
// }  

