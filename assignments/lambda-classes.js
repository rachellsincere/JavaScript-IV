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


//Person Class object examples
const sammi = new Person ({
    name: 'Sammi',
    age: '23',
    location: 'Santa Monica',
    gender: 'F'
})

const jalen = new Person ({
    name: 'Jalen',
    age: '19',
    location: 'Miami',
    gender: 'M'
})


//Instructor Class object examples
const lori = new Instructor({
    name: 'Lori',
    age: '35',
    location: 'Anchorage',
    gender: 'F',
    specialty: 'Front-End',
    favLanguage: 'Javascript',
    catchPhrase: 'Cash rules everything around me'
})
const james = new Instructor({
    name: 'James',
    age: '56',
    location: 'Atlanta',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'Java',
    catchPhrase: 'After the rain comes the sun'
})

//Student Class object examples
const jeremy = new Student({
    name: 'Jeremy',
    age: '63',
    location: 'Florida',
    gender: 'M',
    previousBackground: 'accountant',
    className: 'CS3401',
    favSubjects: ['math', 'art', 'writing', 'music']
})

const theTank = new Student({
    name: 'Gervonta',
    age: '23',
    location: 'Atlanta',
    gender: 'M',
    previousBackground: 'boxer',
    className: 'CS101',
    favSubjects: ['physical fitness', 'history', 'language', 'art']
})


//Project Manager Class object examples
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

const tom = new ProjectManager({

    name: 'Tom',
    age: '42',
    location: 'Palm Springs',
    gender: 'M',
    specialty: 'redux',
    favLanguage: 'C#',
    catchPhrase: "And that's the wayyyyyy the news goes!",
    gradClassName: 'WebPT6',
    favInstructor: 'Michael'
})

/* Test Logs
console.log(sammi.speak());
console.log(sammi.gender);
console.log(jalen.location);
console.log(lori.catchPhrase);
console.log(lori.demo("Applied Js"));
console.log(lori.grade(sammi, "Calculus"));
console.log(james.specialty);
jeremy.listsSubjects();
console.log(jeremy.age);
console.log(jeremy.prAssignment('javascript2'));
console.log(jeremy.sprintChallenge('javascript4'));
console.log(theTank.previousBackground);
console.log(lala.catchPhrase);
console.log(lala.standUp('sprint03'));
console.log(lala.debugsCode(jeremy, 'CSS'));
console.log(tom.catchPhrase);
*/

