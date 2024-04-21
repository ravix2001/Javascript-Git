let string = "";
let newString = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("#input").value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector("#input").value = string;
        }
        else if (e.target.innerHTML == "⌫") {
            newString = "";
            for(var i=0; i<string.length-1;i++){
                newString = newString + string[i];
            }
            document.querySelector("#input").value = newString;
            string = newString;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector("#input").value = string;
        }
    });
});
