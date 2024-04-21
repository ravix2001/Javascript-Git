let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College";     //concatenate

/*
let divs = document.querySelectorAll(".box");
console.log(divs);
*/
/*
divs[0].innerText = "new value 1";
divs[1].innerText = "new value 2";
divs[2].innerText = "new value 3";
*/
/*
let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;      //string interpolation
    idx++;
}
*/
/*
let pree = document.querySelector("pre");   //error
console.log(pre);
*/
/*
let id = div.getAttribute("id");    //error
console.log(id);
*/
/*
div.style.backgroundColor = "blue";
*/
let el = document.createElement("button");
el.innerText = "click me";
console.log(el);

let div = document.querySelector("div");
div.append(el);

/*Classes & Objects*/
let data = "Data here!!!"
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(data);
    }
}
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "Data edited!!!";
    }
}
let student1 = new User("ravi" , "ravi@gmail.com");
let student2 = new User("musu" , "musu@gmail.com");
let admin1 = new Admin("Ravi" , "Ravi@gmail.com");
