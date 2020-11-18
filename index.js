// Add your functions here

function map(array, method) {return array.map(method)};

function reduce(array, method, start) {
    if (start) {
        return array.reduce(method, start);
    } else {
        return array.reduce(method);
    };
};