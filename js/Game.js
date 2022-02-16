/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: "Life is like a box of chocolates"},
            {phrase: "When in Rome"},
            {phrase: "Kill two birds with one stone"},
            {phrase: "It's raining cats and dogs"},
            {phrase: "It takes one to know one"}
        ];
        this.activePhrase = null;
    }

    get randomPhrase() {
        const MIN = 0;
        const MAX = this.phrases.length;
        let index = Math.floor(Math.random() * (MAX - MIN) + MIN);

        return this.phrases[index].phrase;
    }
}