// Add your functions here
const map = (arr, func) => {
    let result  = [];
    for (let i = 0; i < arr.length; i++){
        let element = arr[i]
        result.push(func(element))
    }

    return result;
}

const reduce = (arr, func, starting) => {
    let result = (!!starting) ? starting : arr[0];
    let i = (!!starting) ? 0 : 1;

    for(; i < arr.length; i++){
        result = func(arr[i], result)
    }
    return result;
}