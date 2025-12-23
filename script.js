let userscore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let computerScorePara=document.querySelector("#computer-score");

const compGenChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];

};
const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was draw. Play Again!"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        userscore++;
        userScorePara.innerText=userscore;
        console.log("YOu win");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compScore++;
        computerScorePara.innerText=compScore;
        console.log("YOu loose");
        msg.innerText=`You loose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice =", userChoice);
    //Generate computer choice
    const compChoice=compGenChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{ 
        let userWin=true;
        if(userChoice ==="rock"){
            userWin=compChoice === "paper" ? false:true;
        }else if(userChoice ==="paper"){
            userWin=compChoice ==="scissor" ?false:true;
        }else {
            userWin= compChoice ==="rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    

};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});