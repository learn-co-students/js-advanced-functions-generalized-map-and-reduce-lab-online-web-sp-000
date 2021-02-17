function map(src, block) {
  return src.map(block);
}

function reduce(src, block, starting=0) {
  if(!!starting) {
    return src.reduce(block, starting);
  }
  else {
    return src.reduce(block);
  }
}