var letter = require("./letter.js");

var word = function (myword) {

    this.counter = 0;
    this.word = myword.split("");
    this.letters = [];

    this.word.forEach(element => {
        element = new letter(element);
        this.letters.push(element);
    });

    this.dispWord = function () {
        console.log(this.letters.join(" "));
    }
    this.checkGuess = function (Guess) {

        this.letters.forEach(element => {
            element.check(Guess);
        });
    }
    this.guessed = function () {

        if (this.letters.join("") === this.word.join("")) {
            return true;

        } else {
            return false;

        }
    }

}


module.exports = word;




