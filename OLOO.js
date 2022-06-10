var WorkShop = {
    setTeacher(teacher){
        this.teacher = teacher;
    },
    ask(question){
     console.log(this.teacher,question);
    }
};

var AnotherWorkShop = Object.assign(
    Object.create(Workshop),
    { speakUp(msg){ 
        this.ask(msg.toUpperCase());
    }
}
);

var jsRecent = Object.create(AnotherWorkShop);
jsRecent.setTeacher("Yayi")
jsRecent.speakUp("is a boy")