// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(subject) {
        return `${joseph.name} receives a perfect score on ${subject}.`
    }
    randomGrade() {
        return Math.random() * Math.ceil(danielle.grade);
    }
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${danielle.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${danielle.name} has begun the sprint challenge on ${subject}.`
    }
    graduate() {
        if(joseph.grade >= 70) {
            return `Let them Graduate!`
        } else {
            return `Needs to complete summer school!`
        }
    }
}

class TeamLead extends Instructor {
    constructor(tlAttrs) {
        super(tlAttrs);
        this.gradClassName = tlAttrs.gradClassName;
        this.favInstructor = tlAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${joseph.name}'s code on ${subject}.`
    }
}

const instructor = new Instructor ({
    name: 'Angie',
    location: 'Brandon',
    age: 28,
    specialty: 'CSS',
    favLanguage: 'JavaScript',
    catchPhrase: 'Balls!'
});

const joseph = new Student ({
    name: 'Joseph',
    location: 'Merced',
    age: 27,
    previousBackground: 'Chef',
    className: 'Webpt9',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 90
});

const danielle = new Student ({
    name: 'Danielle',
    location: 'Merced',
    age: 18,
    previousBackground: 'Cashier',
    className: 'Webpt8',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 85
});

const melanie = new Student ({
    name: 'Melanie',
    location: 'Merced',
    age: 20,
    previousBackground: 'Bank Teller',
    className: 'Web20',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
    grade: 65
});

const teamLead = new TeamLead ({
    name: 'David',
    location: 'Mariposa',
    age: 25,
    gradClassName: 'Web9',
    favInstructor: 'Ben'
});

console.log(instructor.demo('Web Dev'));
console.log(instructor.grade('JavaScript I'));
console.log(joseph.listsSubjects());
console.log(melanie.PRAssignment('JavaScript II'));
console.log(danielle.sprintChallenge('JavaScript II'));
console.log(teamLead.standUp('#Webpt9-David'));
console.log(instructor.grade('JavaScript I'));
console.log(instructor.randomGrade());
console.log(joseph.graduate());
