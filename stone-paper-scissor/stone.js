let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const ms=document.querySelector("#msg");
const userScorePara = document.querySelector("#users");
const compScorePara = document.querySelector("#coms");
const gencompChoice=()=>{
    const options = ["rock", "paper", "scissor"];
     const ranidx= Math.floor(Math.random()*3)
     return options[ranidx];
};
const drawGame =()=>{
    
     ms.innerText = " game was draw.Play again" ;
     ms.style.backgroundColor="#081b31";
};
const showWinner= (userWin ,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        
        ms.innerText = `You win! your ${ userChoice} beats ${compChoice}`;
        ms.style.backgroundColor="green";
    } else{
        compScore++;
        compScorePara.innerText= compScore;
         ms.innerText = `You lost ${compChoice} beats your ${userChoice}` ;
         ms.style.backgroundColor="red";
    }

}
const playGame = (userChoice)=>{
    console.log("user choice",userChoice)
    const compChoice= gencompChoice();
    console.log("computer choice",compChoice);
    if(userChoice === compChoice){
        drawGame();

    } else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin= compChoice === "paper"? false:true;
        } else if(userChoice === "paper"){
            userWin= compChoice === "scissor"? false:true;
        } else{
           userWin= compChoice ==="rock"? false: true;

        }
        showWinner(userWin ,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
   choice.addEventListener("click",()=>{
    const userChoice= choice.getAttribute("id")
        
        playGame(userChoice);

    });
    
    
});
