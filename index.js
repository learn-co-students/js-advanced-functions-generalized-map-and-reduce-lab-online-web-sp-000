// Add your functions here
function map(sourceArray,fx){
    let out = []
    for (let i=0;i<sourceArray.length;i++){
        out.push (fx(sourceArray[i]))
    }
    return out
}

function reduce(sourceArray,fx,init){
    // return sourceArray
    // return fx
    // return 
    // let out = []
    let out=init
    let o=0
    if (init==undefined) {o=1,out=sourceArray[0]}
    for (let i=(0+o);i<sourceArray.length;i++){
        out = (fx(sourceArray[i],out))
    }
    return out
}