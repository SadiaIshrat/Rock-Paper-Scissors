let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".ball");
let msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const Idx = Math.floor(Math.random()*3);
    return options[Idx];
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        document.querySelector("#user-score").innerText=userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        document.querySelector("#comp-score").innerText=compScore;                
        msg.innerText = "Computer wins";
        msg.style.backgroundColor = "red";
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice!=compChoice){
        let userWin = true;
        if(userChoice==="rock"){
            userWin =  compChoice==="scissors"? true:false;
        }else if(userChoice==="scissors"){
            userWin =  compChoice==="rock"? false:true;
        }else{
            userWin =  compChoice==="scissors"? false:true;
        }
        showWinner(userWin);
    }else{
        msg.innerText = "It's a draw";
        msg.style.backgroundColor = "gray";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
