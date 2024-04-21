/*Operators*/
let a = 5;
let b = 7;
console.log("a + b = ", a+b);
console.log("applying post increment in a =",a++);
console.log("after post increment a =",a);

let cond1 = a==(b-1);
let cond2 = a==6;
console.log("cond1 && cond2 =",cond1 && cond2);

/*Conditional Statements*/
let color;
let mode = "dark"; 
if(mode==="dark"){
    color = "black";
}

if(mode==="light"){
    color = "white";
}
console.log(color);

/*Ternary Operators*/
// condition ? true : false
let age = 22;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

/*Practice Questions*/

//alert("Hello!");

/*let message = prompt("Hello please enter your name");
console.log(message);
*/

/*let num = prompt("Enter a number");
if(num % 5 === 0){
    console.log(num,"is a multiple of 5")
}
else{
    console.log(num,"is not divisible by 5");
}
*/

/*Next Question*/
let score = prompt ("Enter your score");
let grades;
if(score<=100 && score>=90){
    grade = "A+";
}
else if(score<90 && score>=80){
    grade = "A";
}
else if(score<80 && score>=70){
    grade = "B";
}
else if(score<70 && score>=60){
    grade = "C"
}
else if(score<60 && score>=50){
    grade = "D"
}
else{
    grade = "F"
}

console.log(grade);
