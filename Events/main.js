/*
let btn = document.querySelector("#btn");
*/
/*
btn.onclick = () => {
    console.log("button was clicked");
    let a = 25;
    a++;
    console.log(a);
}
*/

//event object
/*
btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}
*/

//event listener
/*
btn.addEventListener("click", () => {
    console.log("Button was clicked - Handler1");
});

btn.addEventListener("click", (evt) => {
    console.log("Button was clicked - Handler2");
    console.log(evt);
    console.log(evt.type);
});
const handler3 = () => {
    console.log("Button was clicked - Handler3");
};
btn.addEventListener("click", handler3);

btn.addEventListener("click", () => {
    console.log("Button was clicked - Handler4");
});
btn.addEventListener("click", () => {
    console.log("Button was clicked - Handler5");
});

btn.removeEventListener("click", handler3);
*/

//Practice Question - Dark mode
let modebtn = document.querySelector("#mode");
let currentmode = "light";

modebtn.addEventListener("click", () =>{

/*
    if(currentmode === "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currentmode);
})
*/
//this can also be done by creating a class in CSS
if(currentmode === "light"){
    currentmode = "dark";
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
    
}
else{
    currentmode = "light";
    document.querySelector("body").classList.add("light");
    document.querySelector("body").classList.add("dark");
}
console.log(currentmode);
});
