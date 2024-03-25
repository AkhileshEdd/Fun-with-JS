// const marvel_heros = {
//     Tony_Stark : "Ironman",
//     Steve_rogers: "Captain America",
//     Bruce: "Hulk",
//     Natasha: "Black Widow"

// }

// console.log(marvel_heros);

const marvel_heros = {
    Tony_Stark : "Ironman",
    Steve_rogers: "Captain America",
    Bruce: "Hulk",
    Natasha: "Black Widow"

}

// console.log(marvel_heros["Natasha"]);
marvel_heros.Thor = "God of thunder"

// Object.freeze(marvel_heros)

marvel_heros.pwerful = true

// console.log(marvel_heros);

const user1 = {
    name: "Akhilesh",
    age: 25,
    email: "akhilesh@gmail.com",
    loggedIn: false
}

// console.log(user1);

user1.greeting = function (){
    console.log(`Hello ${this.name}`);
    console.log(`Your email is: ${this.email}`);
}
// console.log(user1.greeting());

const obj1 = {1: "A" , 2: "B"}
const obj2 = {3:"C" , 4: "D"}
const obj4 = {4: "E" , 6: "F"}

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

console.log(`${Object.keys(user1)}:${Object.values(user1)}`);

