// Add your functions here
// function map(sourceArray) {
//   let arr = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     arr.push(-1 * sourceArray[i]);
//   }
//   return arr;
// }

// function map(sourceArray) {
//   let arr = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     arr.push(fn(sourceArray[i]));
//   }
//   return arr;
// }

// function map(sourceArray) {
//   let arr = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     arr.push(fn(sourceArray[i]));
//   }
//   return arr;
// }

// function map(sourceArray) {
//   let arr = [];
//     for (let i = 0; i < sourceArray.length; i++) {
//       arr.push(sourceArray[i] * sourceArray[i]);
//     }
//   return arr;
// }


function map(arr, fn) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    let result = fn(elem);
    array.push(result);
    // r.push(fn(arr[i]))
  }
  return array;
}

// function t(e, f) { return 2 * e}
// map(src, t)
// map(src, function(e) { return -1 * e})

// function t(elems) {
//   return elems[0]
// }





// function reduce(arr, fn, startingPoint) {
//   let sum = 0
//   if (startingPoint === undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       sum = fn(sum, arr[i])
//     }
//     return sum
//   } else {
//     // sum = startingPoint;
//     for (let i = 0; i < arr.length; i++) {
//       sum = fn(sum, arr[i])
//       }
//     }
//     return sum + startingPoint;
// }

function reduce(arr, fn, sp) {
  let sum = 0;
  let i = 0;
  if (!sp) {
    sum = arr[0]
    i = 1;
  } else {
    sum = sp;
    i = 0;
  }

  for (;i<arr.length; i++) {
    sum = fn(sum, arr[i])
  }
  return sum
}


// function addition(a, fn) {
//   let sum = 0;
//   for(let i=0; i<a.length; i++) {
//     sum = sum + fn(a[i])
//   }
//   return sum
// }



addition([1,2,3], function(a) { a; })
