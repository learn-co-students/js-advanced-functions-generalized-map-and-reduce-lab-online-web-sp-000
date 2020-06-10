// Add your functions here
function map(src, fn){
let r = [];
for (let i=0; i < src.length; i++){
  r.push(fn(src[i]));
}
return r
}

function reduce(src, fn, n){
  let i = 0;
  let r = n;
  if(!n){
    r = src[0];
    i = 1;
  };

  for (i ; i < src.length; i++){
    r = fn(src[i], r);
    console.log(r, i, src[i], n);
  }
  return r
  console.log(r)
}
