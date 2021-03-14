// Add your functions here
function map(values,func){
  return values.map(function(v){
     return func(v)
  })
}

function reduce(values,func,startingPoint = 0){
    let value = []

    values.map(function(v){
        if(typeof v === 'number'){
          startingPoint = func(v,startingPoint)
        } else {
          value.push(func(v,value))
        }
    })

    if (value.includes(false)){
        return false
    } else if (!value.includes(false)){
        if(startingPoint > 0){
            return startingPoint
        } else {
             return true
        }
       
    }

}
     


