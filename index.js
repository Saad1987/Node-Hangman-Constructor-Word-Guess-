var Word = require("./word.js");

var inquirer = require('inquirer');

var colors = require('colors');

var allowedGuesses = 10;

var wordsArray = ["Forrest Gump", "Back to the Future", "The Shawshank Redemption", "Saving Private Ryan","The Lord of the Rings"];

var randNum;
var numArray = [];
var userGuessArray = [];
var turn = 0;



function resetGame() {

    allowedGuesses = 10;
    userGuessArray = [];
    randNum = Math.floor(Math.random() * wordsArray.length);

    if (numArray.indexOf(randNum) === -1) {
        numArray.push(randNum);
        word = new Word(wordsArray[randNum]);
        promptForGuess();

    } else {
        resetGame();
    }

}

function playAgain() {


    inquirer.prompt([

        {
            type: "confirm",
            name: "playAgain",
            message: "Do you wanna play again ?"
        }

    ]).then(function (user) {


        if (user.playAgain) {

            turn = 0;
            numArray = [];
            resetGame();

        } else {

            console.log("\n Ok ! No problem, come back soon :) !!".rainbow.bold)
        }
    });
}



function promptForGuess() {

    console.log("\n");
    word.dispWord();
    console.log("\n");
    inquirer.prompt([

        {
            type: "input",
            name: "guess",
            message: "Guess a letter !"
        }

    ]).then(function (user) {


        userGuess = user.guess.toLowerCase().trim();
        guessingWord = wordsArray[randNum].toLowerCase();
        var alpha = "abcdefghijklmnopqrstuvwxyz" ;

        if ((userGuess.length === 1 && userGuess.length !== 0)&&(alpha.indexOf(userGuess) !== -1)) {
            if (userGuessArray.indexOf(userGuess) === -1) {
                userGuessArray.push(userGuess);
                if (guessingWord.indexOf(userGuess) !== -1) {
                    console.log("\nCORRECT !".green.bold);
                    word.checkGuess(userGuess);
                    if (word.guessed() === false) {
                        promptForGuess();
                    } else {
                        word.dispWord();
                        console.log("\nYou got it right !\n".rainbow.bold);
                        turn++;

                        if (turn !== wordsArray.length) {
                            console.log("Next word !\n".green.bold);
                            resetGame();

                        } else {
                            console.log("\nCONGRATULATION !!!\n".america.bold + "You have discovered all the words !\n".bold)
                            playAgain();
                        }
                    }
                } else {

                    if (allowedGuesses > 1) {
                        allowedGuesses--;
                        console.log("\nINCORRECT !!! ".red.bold + "\n" + allowedGuesses + " guesses remaining !");
                        promptForGuess();
                    } else {

                        console.log("\nG A M E    O V E R".bold + "\n0 guesses remaining !!\n\n".red.bold);
                        playAgain();
                    }

                }
            } else {

                console.log("\n You have already guessed that letter for this word...\n letters already guessed : ".green.bold + userGuessArray.join(" ").blue.bold);
                promptForGuess();
            }

        }
        else {
            console.log("\nPleaser enter a single valid letter and not a number or multiple letters. Thanks !".yellow.bold)
            promptForGuess();
        }


    });

}



resetGame();
