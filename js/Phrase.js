/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // init html block
        let html = `<div id="phrase" class="section"><ul>`;

        // split current phrase into an array (including spaces)
        let phraseArr = this.phrase.split("");

        // parse the array
        phraseArr.forEach(element => {
            if (element == " ") {
                html += `<li class="space"></li>`;
            } else {
                html += `<li class="hide letter ${element}">${element}</li>`;
            }
        });

        html += `</ul></div>`;

        return html;
    }
}