// Add your functions here

function map(sourceArray, callbackFunction){

    const mappedArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        mappedArray.push(callbackFunction(sourceArray[i]));
    }
    return mappedArray;
}


function reduce(sourceArray, callbackFunction, startingPoint=0) {

    if (startingPoint){
        var i = 0;
        var reducedValue = startingPoint; 
    } else {
        var i = 1;
        var reducedValue = sourceArray[0];
    }

    for (i; i < sourceArray.length; i++) {
        reducedValue = callbackFunction(reducedValue, sourceArray[i]);
    }

    return reducedValue;

} 