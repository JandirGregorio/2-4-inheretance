class Person {

  // constructor is invoked when a new instance is made

  constructor(first, last, age) {
    // in a constuctor, this is referring to the object being called
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  introduce() {
    return `Hi, I'm ${this.firstName} and I'm ${this.age} years old.`;
  }
}

// const jandir = new Person('jandir', 'gregorio', 21);
// console.log(jandir.fullName());
// console.log(jandir.introduce());

const personMethods = Object.getOwnPropertyNames(Person.prototype);
const person = Object.getOwnPropertyNames(Person);
console.log(personMethods);
console.log(person);

console.log(Object.getOwnPropertyNames(Object));
console.log(Object.getOwnPropertyNames(Object.prototype));


module.exports = Person;