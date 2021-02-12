// Add your functions 


function map(arr, func) {
  let r = [];
  for (let i = 0; i < arr.length; i++) {
    r.push(func(arr[i]));
};
  return r
}

 function reduce(arr, func, startingPoint = 0) {
     let r = startingPoint ? startingPoint : arr[0];
     let i = startingPoint ? 0 : 1;
     for (; i < arr.length; i++) {
      r = func(arr[i], r)
      
  };
  
  return r
 }




