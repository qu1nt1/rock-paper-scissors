var computerScore = 0;
var userScore = 0;


function computer_play(userChoice) {
    document.querySelector(".p2").innerHTML = "";
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        document.querySelector(".p2").style.backgroundImage = "url(images/rock-icon.png)";
        document.querySelector(".text-computer-choice").innerHTML = "ROCK";
    } else if (computerChoice === 1) {
        document.querySelector(".p2").style.backgroundImage = "url(images/paper-icon.png)";
        document.querySelector(".text-computer-choice").innerHTML = "PAPER";
    } else {
        document.querySelector(".p2").style.backgroundImage = "url(images/scissors-icon.png)";
        document.querySelector(".text-computer-choice").innerHTML = "SCISSORS";
    };
    
    if (computerChoice === userChoice) {
        document.querySelector(".result-title").innerHTML = "It's a draw!"
    } else if (userChoice === 1 && computerChoice === 0) {
        document.querySelector(".result-title").innerHTML = "You won!🥳" 
        userScore+=1;
    } else if (userChoice === 1 && computerChoice === 2) {
        document.querySelector(".result-title").innerHTML = "You lose😔" 
        computerScore+=1;
    } else if (userChoice === 0 && computerChoice === 1) {
        document.querySelector(".result-title").innerHTML = "You lose😔" 
        computerScore+=1;
    } else if (userChoice === 0 && computerChoice === 2) {
        document.querySelector(".result-title").innerHTML = "You won!🥳"
        userScore+=1;
    } else if (userChoice === 2 && computerChoice === 0) {
        document.querySelector(".result-title").innerHTML = "You lose😔"
        computerScore+=1;
    } else if (userChoice === 2 && computerChoice === 1) {
        document.querySelector(".result-title").innerHTML = "You won!🥳"
        userScore+=1;
    } else {
        document.querySelector(".result-title").innerHTML = "ERROR"
    }

    document.querySelector(".user").innerHTML = "Your score: " + userScore;
    document.querySelector(".computer").innerHTML = "Computer score: " + computerScore;
};


/* HOW TO PLAY BUTTON */

document.querySelector(".tutorial-button").addEventListener("click", function () {
    document.querySelector(".p2").classList.toggle("tutorial-img");
    document.querySelector(".computer-choice").classList.add("full-img");
    if (document.querySelector(".box-text-2").innerHTML === "TUTORIAL") {
        document.querySelector(".box-text-2").innerHTML = "‎"; 
    } else {
        document.querySelector(".box-text-2").innerHTML = "TUTORIAL";
    }
});

/* PLAY BUTTON */

document.querySelector(".play-button").addEventListener("click", function () {
    document.querySelector(".initial-buttons").classList.toggle("hidden-area");
    document.querySelector(".box-text-2").innerHTML = "COMPUTER";
    document.querySelector(".box-text-1").innerHTML = "YOU";
    document.querySelector(".playing-buttons").classList.toggle("hidden-area");
    document.querySelector(".computer-choice").classList.remove("full-img");
    document.querySelector(".p2").innerHTML = "COMPUTER IS CHOOSING";
    if (document.querySelector(".p2").classList.contains("tutorial-img")) {
        document.querySelector(".p2").classList.toggle("tutorial-img");
    };
});

/* ROCK BUTTON */

document.querySelector(".rock-button").addEventListener("click", function () {
    document.querySelector(".playing-buttons").classList.toggle("hidden-area");
    document.querySelector(".user-choice").classList.toggle("hidden-area");
    document.querySelector(".play-again-button").classList.toggle("hidden-area");
    document.querySelector(".user-choice").style.backgroundImage = "url(images/rock-icon.png)";
    document.querySelector(".user-choice").innerHTML = "ROCK";
    computer_play(0)
});

/* PAPER BUTTON */

document.querySelector(".paper-button").addEventListener("click", function () {
    document.querySelector(".playing-buttons").classList.toggle("hidden-area");
    document.querySelector(".user-choice").classList.toggle("hidden-area");
    document.querySelector(".play-again-button").classList.toggle("hidden-area");
    document.querySelector(".user-choice").style.backgroundImage = "url(images/paper-icon.png)";
    document.querySelector(".user-choice").innerHTML = "PAPER";
    computer_play(1)
});

/* SCISSORS BUTTON */

document.querySelector(".scissors-button").addEventListener("click", function () {
    document.querySelector(".playing-buttons").classList.toggle("hidden-area");
    document.querySelector(".user-choice").classList.toggle("hidden-area");
    document.querySelector(".play-again-button").classList.toggle("hidden-area");
    document.querySelector(".user-choice").style.backgroundImage = "url(images/scissors-icon.png)";
    document.querySelector(".user-choice").innerHTML = "SCISSORS";
    computer_play(2)
});

/* PLAY AGAIN BUTTON */

document.querySelector(".play-again-button").addEventListener("click", function() {
    document.querySelector(".initial-buttons").classList.toggle("hidden-area");
    document.querySelector(".user-choice").classList.toggle("hidden-area");
    document.querySelector(".play-again-button").classList.toggle("hidden-area");
    document.querySelector(".p2").style.backgroundImage = "";
    document.querySelector(".text-computer-choice").innerHTML = "";
    document.querySelector(".box-text-1").innerHTML = "‎";
    document.querySelector(".box-text-2").innerHTML = "‎";
    document.querySelector(".result-title").innerHTML = "‎"
});
