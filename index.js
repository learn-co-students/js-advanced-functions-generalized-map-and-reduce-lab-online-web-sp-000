// Add your functions here

function map (src, unique){
    //console.log(unique)

    let r = [];
    for (let i = 0; i < src.length; i++ ) {
        r[i]=unique(src[i]);
    }
    return r;
    
}

function reduce (src, unique, startingPoint){
    console.log(startingPoint)
    let outVar
    if (startingPoint !== undefined) {
        outVar = startingPoint + src[0];
    }
    else {
        outVar = src[0];
    }
    for (let i = 1; i < src.length; i++ ) {
        outVar = unique(src[i], outVar);
    }
    return outVar;
}