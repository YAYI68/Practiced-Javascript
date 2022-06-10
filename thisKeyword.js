
// implicit binding of the this keyword

var o1 = {
    bar: "bar1",
    foo:function(){
        console.log(this.bar)
    }
};
var o2 = { bar: "bar2", foo:o1.foo}

var bar = "bar3";
var foo = o1.foo;

o1.foo();
o2.foo();
foo();

// explicit binding of the this keyword

function foo() {
    console.log(this.bar)
}

var bar = "bar"
var obj = { bar: "bar2"}

foo();
foo.call(obj)

// this keyword hard binding 

function foo() {
    console.log(this.bar)
}

var obj = { bar: "bar"}
var obj2 = { bar: "bar2"}

var orig = foo
foo = function(){
    orig.call(obj);
}
foo()
foo.call(obj2)