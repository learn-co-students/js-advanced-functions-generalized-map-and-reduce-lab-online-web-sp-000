// Add your functions here
function map(array, fnc) {
  let rt = []
  for(let ele of array) {
    rt.push(fnc(ele))
  }
  return rt
}

function reduce(array, fnc, start) {
  let i = 0
  if(!start) {
    start = array[0]
    i = 1
  }
  for(; i < array.length; i++) {
    start = fnc(array[i], start)
  }
  return start
}