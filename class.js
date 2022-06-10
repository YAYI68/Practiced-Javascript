class WorkShop{
    constructor(name){
        this.name = name;
    }
    ask(question){
        console.log(this.name,question);
    }
}

class Office extends WorkShop{
    constructor(name){
        super(name);  
    }
}

// x = new Office("Yayi");
// x.ask("Hello")

// function Constructor

function Work(name){
    this.name = name;
    return function ask(question){
            console.log(this.name,question);
        }
}
// Work.prototype.ask = function ask(question){
//     console.log(this.name,question);
// }

s = new Work("Yayi");
s.ask("Hello")


