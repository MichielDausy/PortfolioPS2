// Author: Michiel Dausy

// calculator
const calculatorButtons = document.getElementById('calculatorButtons');
const buttons = calculatorButtons.querySelectorAll('button');
const inputsCalculator = document.getElementById('inputsCalculator');
const inputs = inputsCalculator.querySelectorAll('input');
let result;
const showResult = document.getElementById('result');

//  rock paper scissors
const message = document.getElementById('message');
const score = document.getElementById('score');
const gameButtons = document.getElementById('gameButtons');
const gameInputs = gameButtons.querySelectorAll('button');
const winnerScores = [0, 0];

// Calculator
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        //Add an eventlistener to each button tag in the calculator section
        if (index === 0) {
            //If the first button is pressed then the 2 numbers are added
            const nr1 = +document.getElementById('number1').value; // the + is there to not concatenate the numbers
            const nr2 = +document.getElementById('number2').value;
            result = nr1 + nr2;
            console.log(result);
        } else if (index === 1) {
            //If the second button is pressed then the 2 numbers are subtracted
            const nr1 = +document.getElementById('number1').value;
            const nr2 = +document.getElementById('number2').value;
            result = nr1 - nr2;
            console.log(result);
        } else if (index === 2) {
            //If the third button is pressed then the 2 numbers are multiplied
            const nr1 = +document.getElementById('number1').value;
            const nr2 = +document.getElementById('number2').value;
            result = nr1 * nr2;
            console.log(result);
        } else {
            //If the fourth button is pressed then the 2 numbers are divided
            const nr1 = +document.getElementById('number1').value;
            const nr2 = +document.getElementById('number2').value;
            result = nr1 / nr2;
            console.log(result);
        }
        showResult.textContent = result; //The result of the calculation is put in the html tag with id = result
    });
});

//Rock Paper Scissors game
//adds event listeners to every button in the game
gameInputs.forEach((button) => {
    button.addEventListener('click', playGame);
});

function playGame(e) {
    //put the player's selection in the constant playerselection
    const playerSelection = e.target.innerText;
    console.log(playerSelection);
    //setup a random number to select for computer
    //it selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();

    //if computerSelection is between these values it makes a selection
    if (computerSelection < 0.34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= 0.67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    //Here the function checkwinners checks who the winner is
    const gameResult = checkWinner(playerSelection, computerSelection);

    //output the scores to the HTML page and say if the player won or lost
    if (gameResult === 'Player') {
        result = ' won!';
        //update score
        winnerScores[0] += 1;
    }

    if (gameResult === 'Computer') {
        result = ' lost!';
        winnerScores[1] += 1;
    }
    if (gameResult === 'Draw') {
        result = ". It's a tie!";
    }

    //output score into Score a DIV element
    score.innerHTML = `Player:  ${winnerScores[0]}  Computer:  ${winnerScores[1]} `;

    //output the player and computer's selections
    messenger(`Player: ${playerSelection} Computer: ${computerSelection}<br>${result}`);
}

function messenger(selectionMessage) {
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer) {
    // if the player and the computer chose the same option then its a draw
    if (player === computer) {
        return 'Draw';
    }

    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        }
        return 'Player';
    }

    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        }
        return 'Player';
    }

    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        }
        return 'Player';
    }
}
// BMI calculator

const bmiresults = document.getElementById('bmiResult');
let measure;
let bmi;
const error = 'Given values are not allowed';
const bmiButton = document.getElementById('bmiButton');

bmiButton.addEventListener('click', () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    console.log(height);
    console.log(weight);
    // calculate the bmi
    bmi = weight / (height / 100) ** 2;
    bmi.toFixed(1);
    console.log(bmi);
    bmi = bmi.toFixed(1); // bmi will be shown with 1 decimal after the fraction
    console.log(bmi);
    // The code below checks in which category of BMI the user falls
    if (bmi <= 18.4) {
        measure = `Your bmi is ${bmi}which means you are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        measure = `Your BMI is ${bmi} which means you are normal`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        measure = `Your BMI is ${bmi} which means you are overweight`;
    } else {
        measure = `Your BMI is ${bmi} which means you are obese`;
    }

    if (weight === 0 || height === 0) {
        bmiresults.innerText = error;
    } else {
        bmiresults.innerText = measure;
    }
});
