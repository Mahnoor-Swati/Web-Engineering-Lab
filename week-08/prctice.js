// const heading = "hi there, its heading";
// const ss = 100;
// console.log(` ${heading}, ${ss}`);
// const mydata = {
//     name: "mahnoor",
//     dept: "BSCS",
//     sem: 7,
// }
// console.log(`this is object ${mydata}`);
// console.log(`this is object ${JSON.stringify(mydata)}`);


// let arr = [1, 2, 2, 5, 1, 1];
// let obj ={};
// arr.forEach(element => {
//     if(obj[element]){
//     obj[element] = obj[element]+1;
//     }
//     else{
//         obj[element]=1;
//     }
// });



// let obj = {
//     name: "Zurain",
//     age: 100,
//     gender: "female",
//     countrycode: 123,
// }
// let obj2 = {...obj};
// obj.age = 20;
// console.log(`this is object ${JSON.stringify(obj2)}`);
// console.log(`this is object ${JSON.stringify(obj)}`);


// let num = [1, 2, 3, 4, 5];
// let num2 = num;
// num2[2]= 9;
// console.log(num)
// console.log(num2)


// destructuring in js
let obj = {
    name: "Zurain",
    age: 10,
    gender: "male",
    countrycode: 123,
    cms: "021-21-0029",
    dept: "CS",
}

let{name, age,...rest} = obj;
console.log(obj);


function greet(name = 'World', ...languages) {
    console.log(`Hello, ${name}!`);
    console.log('Languages:', ...languages);
    }