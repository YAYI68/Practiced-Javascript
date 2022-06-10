
// console.log("Hello world!");
// var foo = []
// for(var i = 0; i<10; i++){
//     foo[i]=function(){return i}
// }
"use strict"
// function sum(){
//   var total = 0;
//   for(var i = 0;i< arguments.length; i++){
//     total += arguments[i];
// }
//   return total;
// }
// var x = [1,2,3,4,5,6,7]
// console.log(sum(1,2))
// sum(1,2)
// sum(...x)

// var m = {
//   st : "hello",
//   checkthis:function (){
//     var self = this
//     console.log(self.st)
//     function other(){
//       console.log(self)
//     }
//     other();
//   }
// }
// console.log(m.checkthis())


// function Person(firstname,lastname){
//     this.firstname = firstname,
//     this.lastname = lastname
//   }
  
//   // let dude = Person("Yayi","Biodun")
//   var dud = {};
//   Person.call(dud,"yayi","biodun")
//   console.log(dud.firstname)

var animal = {
  kind:"human"
}
var x = Object.create(animal,{food : {value:"yam"}})
console.log(x.food)



class Person{
    constructor(firstname,lastname){
      this._firstName = firstname;
      this._lastName = lastname
    }
    fullname(){
      return `${this._firstName} ${this._lastName}`
    }
    get firstname(){
      return this._firstName
    }
    set changeFirstname(name){
      return this._firstName = name
  }
  }
  
  // let y = new Person("Yayi","biodun")
  // console.log(y.firstname)
  // y.changeFirstname = "Tunde"
  // console.log(y.fullname())
  
  class Student extends Person{
    constructor(course,firstname,lastname){
      super(firstname,lastname);
      this._course = course;
    }
    studentDetail(){
      return `${this.fullname()} is in ${this._course} dept `
      
    }
  }
  
  let jide = new Student("Geology","jide","kosoko")
  
  // console.log(jide.fullname())
  
  console.log(jide.studentDetail())


// closure is when a function remembers its lexical scope even when its been excuted outside its lexical scope

function foo(){
    var bar = "bar";
    function bas(){
        console.log(bar)
    }
    bam(bas);
}

function bam(bas){
    bas()
}

foo()

// closure example 2
function foo(){
    var bar = "bar";
    return function(){
        console.log(bar)
    }
}
foo()();
var f = foo()
f(); 
