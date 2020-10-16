// Add your functions here

function map(sourceArray, callbackFunction){

    const mappedArray = [];
    for (let i = 0; i < sourceArray.length; i++){
        mappedArray.push(callbackFunction(sourceArray[i]));
    }
    return mappedArray;
}



function reduce(sourceArray, callbackFunction, startingPoint=0) {

    if (startingPoint && typeof startingPoint !== "boolean"){
        var reducedValue = startingPoint
    } else if (startingPoint === 0) {
        var reducedValue = 0;
    } else {
        var reducedValue = true;
    }

    for (let i = 0; i < sourceArray.length; i++) {
        reducedValue = callbackFunction(reducedValue, sourceArray[i]);
    }

    return reducedValue;

} 


