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


//Student Class
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
}

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


//Project Manager Class
class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel} @channel standy times!`;
    }
    debugsCode(student,subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Project Manager Class example
const lala = new ProjectManager({

    name: 'Lala',
    age: '25',
    location: 'New York',
    gender: 'F',
    specialty: 'Front-End',
    favLanguage: 'C++',
    catchPhrase: 'Badda no Bing',
    gradClassName: 'WebPT6',
    favInstructor: 'Emily'
})

console.log(lala.catchPhrase);
console.log(lala.standUp('sprint03'));
console.log(lala.debugsCode(jeremy, 'CSS'));


