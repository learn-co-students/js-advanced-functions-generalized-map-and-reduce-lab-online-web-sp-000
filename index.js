// Add your functions here


function map(array, work){
  let r = [];
  for (let i = 0; i < array.length; i++ ) {
    r.push(work(array[i]));
  }
  return r
  
  
}

function reduce(array, work, startingPoint=0) {
    let r = (!!startingPoint) ? startingPoint : array[0];
  for (let i = (!!startingPoint) ? 0 : 1; i < array.length; i++ ) {
    r = work(array[i], r);
    //console.log(Boolean(array[i]));
  }
  return r;
}

//function (){}

