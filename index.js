// Add your functions here
function map(source, call) {
let x = []
for (let i =0; i < source.length; i ++) {
     let element = source[i]
     x.push(call(element))
}
return x
}

function reduce(source, call, start) {
     let x = (!!start) ? start : source[0]
     let i = (!!start) ? 0 : 1
     for (; i < source.length; i ++) {
          x = call(source[i], x)
     }
     return x
}