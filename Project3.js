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
let movieRating, averageRating, totalRating, numberRating;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen

    while ( 0 < 1){
        setContinueResponse();
        if (continueResponse === 1) {
            setMovieTitle();
            setMovieRating();
            setNumberRatings();
            calculateTotalRating();
            setAverageRating();
        }
        else {
            printGoodbye();
        }
    }
}

main();

function setContinueResponse() {
    continueResponse = -1;
    while (typeof continueResponse === 'undefined' || isNaN(continueResponse) || continueResponse < 0 || continueResponse > 1) {
        continueResponse = Number(PROMPT.question(`\nPlease choose one of the following. [0 = give average witch current data or 1 = enter rating]: `));
    }
}

function setMovieTitle() {
    movieTitle = PROMPT.question('\nPLease enter a movie Title: ');
}

function setMovieRating() {
    let answeredQuestion = 0;
    let counter = 0;
    const MAX_WRONG_TRIES = 3,
        MAX_RATING = 5,
        MIN_RATING = 1;
    while (counter < MAX_WRONG_TRIES && answeredQuestion != 1) {
        movieRating = Number(PROMPT.question(`\nOn a scale of 1 to 5 stars, with 5 being the best, what do you rate it? `));
        if (movieRating < MIN_RATING || movieRating > MAX_RATING) {
            console.log(`\nDo you know how to follow directions? ${movieRating} is a incorrect value please try again.`);
            counter++;
        }

        else {
            answeredQuestion = 1
        }
    }
}

function setNumberRatings() {
    if (numberRating >= 1) {
        numberRating++;
    } else if (numberRating == null) {
        numberRating = 1;
    }
}

function calculateTotalRating() {
    const TOTAL_RATING = 0;
    totalRating = TOTAL_RATING + movieRating;
}

function setAverageRating() {
    averageRating = totalRating / numberRating;
}

function printGoodbye() {
    console.log(`\n\t The average rating of ${movieTitle} is ${averageRating} stars. Goodbye, we thank you for your time.`);
}
