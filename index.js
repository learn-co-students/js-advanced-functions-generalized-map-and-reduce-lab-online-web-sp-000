// Add your functions here

//write a generalized map and reduce function. Both of these functions will take an Array and a function
//and require that you pass information between the function and the callback.

//Your implementation should expect a source array and a function. All the tests will pass an Array and a block.
//Remember, map returns a new Array.
function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
  
    return r;
}

//mapToSquare([1, 2, 3, -9]) //=> [1, 4, 9, 81]
//became generalized as:
//map([1, 2, 3, -9], function(a){ return a * a }) //=> [1, 4, 9, 81]


//Your implementation should expect a source array and optionally a starting value. All the tests will
//pass an Array and (sometimes) a starting point.
function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
}