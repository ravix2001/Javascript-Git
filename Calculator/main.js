let string = "";
let newString = "";
let buttons = document.querySelectorAll(".button");
/*buttons = document.querySelectorAll(".button").classList.add("button");*/
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        document.querySelector("#input").classList.remove("infinity");
        if (e.target.innerHTML == "=") {
            string = eval(string);
            try{
                if(string!=Infinity){
                document.querySelector("#input").value = string;
                }
                else{
                    throw(string);
                }
            }
            catch(err){
                string = "Cannot be divisible by 0";
                document.querySelector("#input").value = string;
                document.querySelector("#input").classList.add("infinity");
            }
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
