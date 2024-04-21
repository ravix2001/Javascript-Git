let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choices");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");
const msgBox = document.querySelector("#msg");
const msgBtn = document.querySelector("#btn");

const reset = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msgBox.innerText = "Let's Play !";
    msgBox.style.backgroundColor = "#081b31";

}

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msgBox.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msgBox.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msgBox.innerText = `You Loose! ${userChoice} beaten by ${compChoice}`;
        msgBox.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        msgBox.innerText = "Tie";
        msgBox.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissor"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else{
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choice.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
});
msgBtn.addEventListener("click",() =>{
    reset();
});