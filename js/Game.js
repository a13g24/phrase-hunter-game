/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("Life is like a box of chocolates"),
            new Phrase("When in Rome"),
            new Phrase("Kill two birds with one stone"),
            new Phrase("It's raining cats and dogs"),
            new Phrase("It takes one to know one")
        ];
        this.activePhrase = null;
    }

    get randomPhrase() {
        const MIN = 0;
        const MAX = this.phrases.length;
        let index = Math.floor(Math.random() * (MAX - MIN) + MIN);

        return this.phrases[index];
    }
}