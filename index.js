// Add your functions here
const arr = [1, 2, 3, 4, -5]

function map(arr, func) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return result;
}

function reduce(arr, func, value) {
   let initVal;
   if (value) {
       initVal = value;
   } else {
       initVal = arr[0]
   }

   let i = value ? 0 : 1;

   for (; i < arr.length; i++) {
       initVal = func(arr[i], initVal)
   }

   return initVal;

}