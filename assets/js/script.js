// Selec 

let button = document.querySelectorAll ('button');
let resultDiv = document.getElementById('result');


// Main game

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Add event listener to the buttons

buttons.forEach(button => {
    button.addEventListner ('click', () => {
        let userChoice = button.id;
        let computerChoice = computerPlay();
        playSound (userChoice);
        let result = playRound (userChoice, ComputerChoice);
        upddateScore (result);
        resultDiv.textContent = result;
    });
});