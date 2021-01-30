// Add your functions here

function map(src, blk){
const ary = src.map(blk)
return ary
}

function reduce(src, blk, start){
    let redu;
    if(!!start){
 redu = src.reduce(blk, start);
    } else {
 redu = src.reduce(blk);
    }
return redu
}