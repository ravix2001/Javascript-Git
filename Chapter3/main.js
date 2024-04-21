//for loop
/*
let i;
for(i=1 ; i<=5 ; i++){
    console.log(i);
}
*/

//while loop
/*
let j = 1;
while(j <= 3){
    console.log(j);
    j++;
}
*/

//do loop
/*
let k = 1;
do{
    console.log(k);
    k++;
}while(k <= 3);
*/

//for-of loop       => used for arrays and strings
/*
let str = "Computer";
let size = 0;
for(let i of str){
    console.log(i);
    size++;
}
console.log("size of string = ",size);
*/

//for-in loop       => used for objects
/*
let student = {
    fullName : "Rahul",
    age : 22,
    cgpa : 8.0,
    isPass : true,
};
for(let key in student){
    console.log(key, student[key]);
}
*/

/*Practice Questions    even no. from 0-100*/
/*
let i;
for(i=0 ; i<=100 ; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
*/
/*Practice Question 2 Guessing correct number*/
/*
let gameNum = 25;
let userNum = prompt("Guess any number");
while(userNum != gameNum){
    if(userNum>gameNum){
        userNum = prompt("That's so big, Guess again");
    }
    else if(userNum<gameNum){
        userNum = prompt("That,s what your EX said, 'too small', Guess again");
    }
}
console.log("Congratulations!!! You guessed it");
*/
//Strings
/*
let str = "Bachelor in Computer Engineering";
console.log(str.length);
console.log(str[0]);
console.log(str[5]);
console.log(str[12]);
*/
//Template literals
/*
let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof(specialString));
*/
/*
let obj = {
    item: "pen",
    price: 20,
};
console.log("The cost of", obj.item, "is Rs.",obj.price);
let output = `The cost of ${obj.item} is Rs.${obj.price}`;  //better approach
console.log(output);
*/
/*
let string = "  IOE Purwanchal Campus  ";
let upper = string.toUpperCase();
let lower = string.toLowerCase();
let trimmed = string.trim();
console.log(string);
console.log(upper);
console.log(lower);
console.log(trimmed);
*/
/*
let fullName = prompt("Enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);
*/
//Arrays
/*
let heroes = ["ironman", "thor", "hulk", "spiderman"];
for (let idx = 0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
}
for  (let hero of heroes){
    console.log(hero);
}
*/
let foodItems = ["pizza", "burger", "momo"];
console.log(foodItems);
foodItems.push("chicken", "mutton");
console.log(foodItems);
foodItems.pop();
console.log(foodItems);
