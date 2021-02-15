// Add your functions here

function map(sourceArray, callbackFunction) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        newArray.push(callbackFunction(sourceArray[i])) 
    }
    return newArray
  
};


// function reduce(sourceArray, callbackFunction, startingPoint = 0 )  {
//     let accumulator = 0;
//     if (startingPoint) {
//          accumulator = startingPoint;
//     }

//     for (let i = 0; i < sourceArray.length; i++ ) {
//         accumulator = callbackFunction(sourceArray[i], accumulator);
//     }
//     return accumulator;
  
// };

function reduce(array, callback, startingValue){
    let i;
    let acc;
    if (startingValue) {
        acc = startingValue;
        i = 0;
    } else {
        acc = array[0];
        i = 1;
    };

    for (; i < array.length; i ++ ) {
        //notice the ; at the start. its weird like that!!!!
        acc = callback(acc, array[i]);
    };

    return acc;




  }
  