let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());




console.log(myDate.toLocaleString('default',{
    weekday: "long",
    month: "long"
}));


