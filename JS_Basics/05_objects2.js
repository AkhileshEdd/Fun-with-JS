const person = {
  name: ["Akhilesh", "Mahto"],
  name2: {
    First: "Aman",
    Last: "Aind",
  },
  age: 25,
  bio() {
    console.log(
      `Hi, My name is ${this.name[0]} ${this.name[1]}, I am ${this.age} years old.`
    );
  },
  introduction: function () {
    console.log("Hello Js users, This is ", this.name2.First);
  },
};

// console.log(person.name[0]);
// console.log(person.bio());
// console.log(person.introduction());
// console.log(person.name);
// console.log(person.introduction());
// console.log(person.name2.Last);

// function logProperty (logname){
//     console.log(person.name2[logname]);
// }

// console.log(logProperty("First"))
// console.log(logProperty("Last"));

// person.name[0] = "Akash"

// person["name2"]["Last"] = "Kumar"

// console.log(person["name2"]["First"]);

// person.email = "akhilesh@gmail.com"

// person.greet = function()  {
//     return console.log(`Hello ${this.name[0]}, How r u?`);
// }

// console.log(person.greet());

// console.log(person);

// let myDataName = nameInput.value;
// let myDataValue = nameValue.value;

// myDataName = "Address"
// myDataValue = "Ranchi"
// person[myDataName] = myDataValue;
// console.log(person.Address);

const user1 = {
  name: "Ravi",
  introduceSelf() {
    console.log(`Hello , My name is ${this.name}`);
  },
};
const user2 = {
  name: "Annie",
  introduceSelf() {
    console.log(`My name is ${this.name}`);
  },
};

// user1.introduceSelf();
// user2.introduceSelf();

const student1 = {
  name: "Aman",
  roll_no: 25,
  isStudying: true,
  coding: {
    language1: "Java",
    language2: "Javascript",
    language3: "Python",
  },
  bio() {
    console.log(
      `Hi, My name is ${this.name}, Roll No.- ${this.roll_no}. Programming languages - ${this.coding.language1} , ${this.coding.language2}, ${this.coding.language3}`
    );
  },
};
const student2 = {
    name: "Nitesh",
    roll_no: 30,
    isStudying: true,
    coding: {
      language1: "C++",
      language2: "Javascript",
      language3: "Php",
    },
    bio() {
      console.log(
        `Hi, My name is ${this.name}, Roll No.- ${this.roll_no}. Programming languages - ${this.coding.language1} , ${this.coding.language2}, ${this.coding.language3}`
      );
    },
  };
  const student3 = {
    name: "Vikash",
    roll_no: 29,
    isStudying: true,
    coding: {
      language1: "Java",
      language2: "C",
      language3: "Typescript",
    },
    bio() {
      console.log(
        `Hi, My name is ${this.name}, Roll No.- ${this.roll_no}. Programming languages - ${this.coding.language1} , ${this.coding.language2}, ${this.coding.language3}`
      );
    },
  };


//   student1.bio()
//   student2.bio()
//   student3.bio()

function Person1 (first, last, age, eye) {
    this.FirstName = first
    this.LastName = last
    this.Age = age
    this.eyeColor = eye
    this.Country = "India"
    this.name = function(){
        console.log(`${this.FirstName} ${this.LastName} , Age: ${this.Age} , EyeColor: ${this.eyeColor}, Country:${this.Country}`);
        return this.FirstName + " " + this.LastName
    }
}

const p1 = new Person1("Akhilesh", "Mahto", 25, "Black")
const p2 = new Person1("Rahul", "Mahto", 30, "Brown")
p1.email = "akhilesh@gmail.com"
Person1.Country = "India"

// console.log(p1);
// console.log(p2);
// console.log(p1.name());
// console.log(p2.name());

function Person2 (name, email, course){
    const obj1 = {}
    obj1.Name = name
    obj1.Email = email
    obj1.course = course
    obj1.bio = function() {
        console.log(`Hi , My name is ${name} , email is - ${email} . My course  is ${course}`);
    }
    return obj1;
}

const Akhilesh = new Person2("Akhilesh" , "akhilesh@gmail.com", "Mca")
// Akhilesh.bio()
const Aman = new Person2("Aman" , "aman@gmail.com", "MCA")
// Aman.bio()

// console.log(Akhilesh);
// console.log(Aman);

function Person3 (name, email, course){
    this.Name = name
    this.Email = email
    this.course = course
    this.bio = function() {
        console.log(`Hi , My name is ${this.Name} , email is - ${this.Email} . My course  is ${this.course}`);
    }
}

const Akhilesh1 = new Person3("Akhilesh", "akhilesh@mail.com" , "MCA")

// Akhilesh1.bio()

const Annie = new Person1("Annie", "Tirkey", 24, "Brown")
const Sonali = new Person2("Sonali", "sonali@gmail.com", "MCA")
const Ashim = new Person3("Ashim" , "ashim@gamil.com" , "BCA")

Annie.name()
console.log(Annie.name());
Ashim.bio()
Sonali.bio()
