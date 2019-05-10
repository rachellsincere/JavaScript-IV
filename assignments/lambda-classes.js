// CODE here for your Lambda Classes

//Person class
class Person {
    constructor(baseAttr) {
        this.name = baseAttr.name;
        this.age = baseAttr.age;
        this.location = baseAttr.location;
        this.gender = baseAttr.gender;
    }
    speak() {
        return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

//Person class examples
const sammi = new Person ({
    name: 'Sammi',
    age: '23',
    location: 'Santa Monica',
    gender: 'F',
})
console.log(sammi.speak());
console.log(sammi.gender);




//Instructor Class
class Instructor extends Person {
    constructor(instrAttr) {
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

//Instructor Class example
const lori = new Instructor({
    name: 'Lori',
    age: '35',
    location: 'Anchorage',
    gender: 'F',
    specialty: 'Front-End',
    favLanguage: 'Javascript',
    catchPhrase: 'Cash rules everything around me'
})
console.log(lori.catchPhrase);
console.log(lori.demo("Applied Js"));
console.log(lori.grade(sammi, "Calculus"));


class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element); //console.logged it instead of return so it would list them.
          })
    }
    prAssignment(prSubject) {
        return `${this.name} has submitted a PR for ${prSubject}`;
    }
    sprintChallenge(sprintSubject) {
        return `${this.name} has begun sprint challenge on ${sprintSubject}`;
    }
}//Student Class

//Student Class Example
const jeremy = new Student({
    name: 'Jeremy',
    age: '63',
    location: 'Florida',
    gender: 'M',
    previousBackground: 'accountant',
    className: 'CS3401',
    favSubjects: ['math', 'art', 'writing', 'music']
})

jeremy.listsSubjects();
console.log(jeremy.age);
console.log(jeremy.prAssignment('javascript2'));
console.log(jeremy.sprintChallenge('javascript4'));


