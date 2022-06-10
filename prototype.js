function WorkShop(teacher){
    this.teacher = teacher;
}
WorkShop.prototype.ask = function(message){
    console.log(this.teacher,message);
}

var deepJS = new WorkShop("Yayi")
var reactJs = new WorkShop("react")

reactJs.ask("Is a framework")

deepJS.constructor === WorkShop;

deepJS.__proto__ = WorkShop.prototype;
Object.getPrototypeOf(deepJS) === WorkShop.prototype;