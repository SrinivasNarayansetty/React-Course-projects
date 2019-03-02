class Person {
    constructor(name='Anonymous',age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi. I am '+this.name + '!';
        return `Hi. I am ${this.name} test!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old. `
    }
}

class Student extends Person { 
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
}
const me = new Student('Srinivas rao',27, 'Computer Science');
const other = new Student();
console.log(me.hasMajor());
console.log(other.hasMajor());
