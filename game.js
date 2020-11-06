const { userRoll , dieRoll } = require('./rolls');
const { playerName } = require('./startGame');
const { intro } = require('./startGame');
const { roomSize, room } = require('./room');
const { declareWinner, endGame } = require('./endGame');

const prompt = require('prompt-sync')();

let tally = [0, 0, 0];
let repeater = true;
console.log(repeater);

// setup
intro();

// Start game
playerName();

while (repeater) {
    // get numbe of players
    console.log(repeater);
    console.log(typeof(repeater));
    let size = parseInt(roomSize());

    // User dice roll
    let score = userRoll();

    // run die rolls for each AI player
    let participants = room(size);

    // scores = game(participants);
    let scores = dieRoll(participants);

    // compare results
    opponentHigh = Math.max.apply(null, scores);

    // create array of winning bots' indexes
    const highs = [];
    scores.forEach((AIscore, index) => AIscore === opponentHigh ? highs.push(index): null);

    // create an array of winning bots' names
    const tie = [];
    highs.forEach((index) => tie.push(participants[index]));

    // declare winner
    tally = declareWinner(score, name, tally, opponentHigh, tie);

    // Play Again function
    endGame(name, tally, repeater);
}

// console.log('this code was reached!');