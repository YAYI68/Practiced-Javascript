function data() {
    return [1,2,3]
}

var temp;
var [
    first = 10,
    [ 
        second,
        third
    ] = [],
    fourth
] = tmp = data() || [];