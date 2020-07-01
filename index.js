// Add your functions here
function map(arr, f){
    let newArr = []
    arr.forEach( e =>{
        newArr.push(f(e))
    } )
    return newArr
}

console.log( map([1,2,3], function(a){ return -1 * a }) )


function reduce(arr,f,s){
   
 
    let acc = (!!s) ? s : arr[0]
    let arr2 = (!!s) ? arr : arr.shift()
    arr.forEach((e,index) => {
       
        acc = f(e,acc)
    })
    return acc
}


console.log( reduce(([1,2,3], function(e, memo){return e + memo}, 100)) )
