var workshop = {
    teacher:"Kyle",
    // ask(question){
    //     console.log(this.teacher,question)
    // }
    ask:function (question){console.log(this.teacher,question)}
};

workshop2.ask("Is this a module")

// Classic/Revealing module pattern

var workshop = ( function Module(teacher) {
    var publicAPI = { ASK, };
    return publicAPI
    function ask() {
        console.log(teacher,question)
    }
})("Kyle")

workshop2.ask("Is this a module 2")

// Module Factory 

function WorkshopModule(teacher) {
    var publicAPI = { ASK, };
    return publicAPI;

    function ask() {
        console.log(teacher,question)
    }
}

var workshop3 = WorkshopModule("Yayi")

workshop3.ask("Is this a module 3")

