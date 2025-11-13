// Create a MarcyStudent class that extends the Student class. 

const Student = require("./Student");

// Remember to import the Person class!
class MarcyStudent extends Student {
    constructor(first, last, age){
        super(first, last, age, 'Software Engineering', 'Marcy Lab School');
    }
}

const jandir = new MarcyStudent('jandir', 'gregorio', 21);
console.log(jandir.fullName());