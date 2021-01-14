function map (obj, callback){
  let newArr = [];
  for (const key in obj){
    newArr.push(callback(obj[key]))
  }
  return newArr;
}

function reduce (obj, callback, accum){
  let i = 1;
  accum? i = 0 : accum = obj[0];
  for (i; i < obj.length; i++){
    accum = callback(accum, obj[i]);
  }
  return accum;
}