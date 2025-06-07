let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll (".choice");
const msg = document.querySelector ("#msg");

const userScorePara = document.querySelector ("#user-score");
const computerScorePara = document.querySelector ("#computer-score");

const genComputerchoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    //rock , paper, scissor
 
    const randIdx = Math.floor(Math.random() * 3);   // generate random no's & "Math.floor(Math.random() * 5)"-->remove decimal  // if you want a random no b/w 0-2 them *3 i.e Math.random() *3 , here, array m store kiya in options ko bcoz index ki form m lana h options so that comp. random gen kr ske options o.e as ye index ki form m tbhi to-->index = number hota h 0,1,2
    return options[randIdx];
};

const drawGame = () => {
    // console.log ("Game was Draw."); 
    msg.innerText = "Game was Draw. Play Again" ;
    msg.style.backgroundcolor = "#081b31" ;
}

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin) {
        userScore++; 
        userScorePara.innerText = userScore;

         console.log ("You Win!"); 
        msg.innerText =`You Win! Your ${userChoice} beats ${computerChoice}` ;
        msg.style.backgroundColor = "green" ;
    } else {
         console.log ("You Lose");
        computerScore++;
        computerScorePara.innerText = computerScore;

        msg.innerText =`You Lose ${computerChoice} beats Your ${userChoice}` ;
        msg.style.backgroundColor = "red" ;
    }
};  

const playGame = (userChoice) => {
    // console.log ("user Choice = " , userChoice);
//generate computer choice
    const computerChoice = genComputerchoice();
    // console.log ("computer Choice = " , computerChoice);

     if (userChoice === computerChoice) {
        //draw game 
        drawGame();
     } else {
        let userWin = true;
        if (userChoice === "rock") {
//scissors , paper
           userWin = computerChoice === "paper" ? false : true; 
        }  else if (userChoice === "paper") {
            //rock , scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock , paper
            userWin= computerChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice , computerChoice);
     }
};      

choices.forEach( (choice) => {
    // console.log(choice);
    choice.addEventListener ("click" , () => {
        const userChoice = choice.getAttribute("id");
        // console.log ("Choice was Clicked", userChoice); 
        playGame(userChoice);

    });
});