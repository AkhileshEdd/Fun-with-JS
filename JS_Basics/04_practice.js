

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         const table = `${i} * ${j} = ${i*j}`
//         console.log(table);
//     }
//     // const table = 5 * i
//     // console.log(table);
    
// }

const obj1 = {
    name : "Honda",
    num : 2069,
    model: "Dio",
    year: 2016
}

const arr1 = ["Dog", "Cat", "Rat", "Horse", "Cow"]

// for (const items of arr1) {
//     console.log(arr1);
// }

// arr1.forEach(items => {
//     console.log(items);
// });

// arr1.forEach(element => console.log(element));

// for (const items in obj1) {
//    console.log();
// }

const arr2 = arr1.filter( (ab) => ab.length)

console.log(arr2);