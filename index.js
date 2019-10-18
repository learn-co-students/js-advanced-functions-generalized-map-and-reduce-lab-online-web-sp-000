// Add your functions here

function map(src, func) {
  return src.map(func)
}

function reduce(src, func, param) {
  if(!!param){
    return src.reduce(func, param)
  }else {
    return src.reduce(func)
  }

}
