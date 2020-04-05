// Add your functions here
function map(arr, func){
    let i;
   let r = []

   for (i = 0; i < arr.length; i++){
       let element = arr[i]
       r.push(func(element))
   }
   return r 
}

function reduce(arr, func, startPoint = 0){
    let i;
   
    for (i = 0; i < arr.length; i++){
        
        if (startPoint){
         i = 0
        }
        else {
         i = 2
         startPoint = arr[i]
        }
        while (i < arr.length) {
            startPoint = func(startPoint, arr[i]);
            i++;
        }
        return startPoint;
   
    }
    
     
}



