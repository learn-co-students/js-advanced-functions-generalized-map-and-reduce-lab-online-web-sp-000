

const map = function(src, cb){
    let r = []
    for(let i = 0; i < src.length; i++){
         let element = src[i]
        r.push(cb(element))
    }
    return r 
}

  


const reduce = function(src, cb, starting){
    
        let r = (!!starting) ? starting : src[0]

        let i = (!!starting) ?  0 : 1 

    for(; i < src.length; i++){

        r =  cb(src[i],r)
    }
    return r
}

