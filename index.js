function map(originalArray, myFunction) {
let newArray = []

for(let i = 0; i < originalArray.length; i++) {
  let isolatedElement = originalArray[i]
  newArray.push(myFunction(isolatedElement))
}
  return newArray;
};

function reduce(sourceArray, myFunction, startingValue){
  let calculatedValue = (!!startingValue) ? startingValue : sourceArray[0]
  let i = (!!startingValue) ? 0 : 1

  for (; i < sourceArray.length; i++ ) {
    calculatedValue = myFunction(sourceArray[i], calculatedValue)
  }

  return calculatedValue;
};
