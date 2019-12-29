function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

function reduce(array, combine, start=0) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}


