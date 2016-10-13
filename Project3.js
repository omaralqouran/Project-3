/**
 *   @author Al-Qouran, Omar (omaralqouran48@gmail.com)
 *   @version 0.0.1
 *   @summary Project 3  || created: 09.27.2016
 *   @todo
 */
"use strict";
const PROMPT = require('readline-sync');

let continueResponse, continueRating;
let movieTitle;
let movieRating, averageRating, numberResponses, totalRating, numberRating;


function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();

    while (continueResponse === 1) {
        const MAX_RETRY_VALUE = 4;
        setMovieTitle();
        setMovieRating();
        setNumberResponses();
        setAverageRating();
        setContinueResponse();

        for (let i = 0; i < MAX_RETRY_VALUE; i++) {
            doPrintGoodbye();
        }
    }
}

main();

function setContinueResponse() {
    function setContinueResponse() {
        if (continueResponse != null) {
            continueResponse = 2;
            while (continueResponse !== 0 && continueResponse !== 1) {
                continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
            }
        } else {
            continueResponse = 1;
        }
    }

}

function setMovieTitle() {
    movieTitle = Number(PROMPT.question('\nPLease enter a movie Title: '));
}

function setMovieRating() {
    movieRating = Number(PROMPT.question(`\nOn a scale of 1 to 5 stars, with 5 being the best, what do you rate ${movieTitle}? `));

}
function setTotalRating () {
    
}

function setNumberResponses() {
    numberResponses ++;
}

function setAverageRating() {
    averageRating = totalRating/numberRating
}

function doPrintGoodbye() {
    console.log(`\n\tGoodbye, we thank you for your time.`);
}

