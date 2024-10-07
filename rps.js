let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");


const genCompChoice = () =>{
    const option = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random ()*3); // 
    return option [randIdx];
};


const drawGame = () => {
    msg.innerText = "GAME DRAW ";
    msg.style.backgroundColor = "blue";
};


const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "YOU WIN"; 
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "YOU LOSE";  
        msg.style.backgroundColor = "red";

    };
};


const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //generate computer choices ->modular function small small peice
    // of programs which we can use further
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if (userChoice === compChoice){
        //draw game 
        drawGame ();
    } else {

        let userWin = true;
        if (userChoice === "rock"){
            //scissor,paper
        
            userWin = compChoice === "paper"?false:true;
        } else if (userChoice === "paper"){
            userWin = compChoice ==="scissors"?false:true;
        }else{
           userWin= compChoice ==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }

};


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
playGame(userChoice);
    });
}); 