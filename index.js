// Add your functions here
function map(arr, fun) {
   let newArray = [];
    arr.forEach(element => {
        newArray.push(fun(element))
    });
    return newArray
}

//  reduce(sourceArray, function(e, memo){
//      return e + memo
//     })

// function reduce(arr, f, num = false) {
//     let returnVar = arr[0] + num;
//     for(let i = 1; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             returnVar += 1;
//             continue;
//         }
//         returnVar += arr[i];
//         console.log(returnVar);
//     }
//     if (arr.includes(true || false) && (returnVar === arr.length)) {
//         return true;
//     } else if (f(arr[1], returnVar) === true || false) {
//         return false;
//     } else {
//         return returnVar;
//     }
// }

function reduce(arr, f, num = false) {
    let returnVal = (num) ? num : arr[0];
    let i = (num) ? 0 : 1;

    for (; i < arr.length; i++) {
        returnVal = f(arr[i], returnVal)
    }
    return returnVal
}