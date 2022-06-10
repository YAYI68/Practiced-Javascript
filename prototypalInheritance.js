function Workshop(teacher){
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
}

function AnotherWorkshop(teacher){
    Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speak = function(msg){
    this.ask(msg.toUpperCase())
}

var JsRecent = new AnotherWorkshop("Yayi")

jsRecent.speak("Hello")