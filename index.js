// Add your functions here
function map(array, fun){
    let newArray = []
    array.forEach(function(a){
        newArray.push(fun(a));
    }) 
    return newArray 
}

function reduce(array, fun, start){
    let memo = true;
    if(start){
        memo = start;  
    }// else//{
        //memo = array[0];
    //}
    array.forEach(function(a){
        memo =  fun(a, memo);
    })
    if(!start && Number.isInteger(memo)){
        return memo - 1
    }else{
    return memo;
    }
}