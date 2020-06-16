// Add your functions here

function map(src, work) {
    const newArr = [];
    for (const num of src) {
        const newNum = work(num);
        newArr.push(newNum);
    }
    return newArr;
}


function reduce(src, work, startingPoint=0) {
    
    let allNums = true;
    for (const ele of src) {
        if (typeof ele != "number") {
            allNums = false
        }
    }
    if (!allNums) {
        startingPoint = true;
    }

    for (const ele of src) {
        startingPoint = work(ele, startingPoint);
    }
    return startingPoint;
}