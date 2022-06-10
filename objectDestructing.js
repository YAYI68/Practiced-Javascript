function data(){
    return { a:1 , b:2 , c:3 , d:4 , e:5}
}

var {
    a:first,
    b:second,
    d:fourth,
} = data()

// 
var first, second;

( {
    b:second,
    a:first,
} = data() )