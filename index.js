function map(array, funct) {
  let newArray = [];
  for (const el of array) {
    newArray.push(funct(el))
  }
  return newArray
}

function reduce(array, funct, startValue = "optional") {
  if (startValue === "optional") {
      return array.reduce(funct)
  }
  else {
    return array.reduce(funct, startValue)
  }
}