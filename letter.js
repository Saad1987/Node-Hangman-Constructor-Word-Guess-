var letter = function (char) {

    this.char = char.toLowerCase();
    this.guessed = false;
    this.toString = function () {
        if (this.char === " ") {
            return this.char;
            this.guessed = true;
        }
        else if (this.guessed === false && this.char !== " ") {
            return "_";
        }
        else if (this.char !== " ") {

            if (char === char.toUpperCase()) {
                return this.char.toUpperCase();
            } else {
                return this.char;
            }
        }
    }
    this.check = function (char2) {
        if (char2.toLowerCase() === this.char) {
            this.guessed = true;
        }
    }

}

module.exports = letter;


