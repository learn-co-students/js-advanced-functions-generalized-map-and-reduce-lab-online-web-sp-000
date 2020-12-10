// Add your functions here
 function map(source, callback) {
   let r = []
   for (let i = 0; i < source.length; i ++) {
     let el = source[i]
     r.push(callback(el))
   }
   return r
 }

function reduce(source, callback, sv=0) {
  let r = (!!sv) ? sv : source[0]
  let i = (!!sv) ? 0 : 1
  for (;i < source.length; i++) {
    r = callback(source[i], r)
  }
  return r
}
