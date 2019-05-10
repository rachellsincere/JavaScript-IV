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

//Person class example
const sammi = new Person ({
    name: 'Sammi',
    age: '23',
    location: 'Santa Monica',
    gender: 'F',
})
console.log(sammi.speak());



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
    name: 'Sammi',
    age: '23',
    location: 'Santa Monica',
    gender: 'F',
    specialty: 'Front-end',
    favLanguage: 'Javascript',
    catchPhrase: 'Cash rules everything around me'
})
console.log(lori.demo("Applied Js"));
console.log(lori.grade(sammi, "Calculus"));