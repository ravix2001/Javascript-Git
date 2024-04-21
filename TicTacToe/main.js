let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".newbtn");
let msgbox = document.querySelector(".msgbox");
let msg = document.querySelector("#msg");


let turnO = true;   //playerX , playerO

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const resetGame = () => {
    turnO = true;
    enableBox();
    msgbox.classList.add("hide");
}
const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if(turnO){     //playerO
            boxes.innerText = "O";
            turnO = false;
        }
        else{       //playerX
            boxes.innerText = "X";
            turnO = true;
        }
        checkWinner();
        boxes.disabled = true;
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgbox.classList.remove("hide");
    disableBox();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                disableBox();
                showWinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click" , resetGame);
