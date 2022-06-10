var str = "Hello";
var world = ["W","o","r","l","d"]

var it1 = str[Symbol.iterator]()

it1.next();
it1.next();
it1.next();
it1.next();
it1.next();

it2.next();