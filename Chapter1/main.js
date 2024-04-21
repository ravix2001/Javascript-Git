console.log("Hello World");
console.log("It's me Ravi");

//variables
age = 22;
next_age = age + 1;

bro = "Tony Stark";

console.log("The age of",bro,"is",age);

x = null;
y = undefined;
console.log(x);
console.log(y);

isFollow = true;
console.log(isFollow);

/*declaration of variables
3-types
var : variable can be re-declared & updated. A global scope variable
let : variable cannot be re-declared but can be updated. A block scope variable
const : variable cannot be re-declared or updated. A block scope variable 
*/
var a = 5;
var a = 66;
var a = 40;
console.log(a);
//var is not good practice to write code instead we use let

let b = 54;
//let b = 56;       //cannot be re-declared
b = 66;             //can be updated
console.log(b);

//const is used for constants like PI
let r = 4;
const PI = 3.14;
area = PI * r * r;
console.log(area);

/*data types in JavaScript
primitive data_types: number, string, boolean, undefined, null, BigInt, symbol

*/
let p = 56;
console.log(typeof p);

/*non-primitive data types: objects=collection of values */
const student = {
    fullName : "Ravi Pandit",
    age : 22,
    cgpa : 8.2,
    isPass : true,
};
console.log(student);
console.log(student["age"]);
console.log(student.isPass);

student["age"] = student["age"] + 1;
console.log(student.age);

/*Practice Questions*/
const product = {
    title : "Ball Pen",
    rating : 4,
    isDealDay : true,
    price : 200,
    offer : 5, 
};
console.log(product);


const profile = {
    username : "@ravipandit",
    isFollow : true,
    followers : 123,
    following : 12,
};
console.log(profile);