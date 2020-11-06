const { opponentHigh, score, name, tally, tie, repeater } = require('./game');

const prompt = require('prompt-sync')();

// declare winner
let declareWinner = (score, name, tally, opponentHigh, tie) => {
    if (score > opponentHigh) {
        console.log(`- You won with ${score}!`)
        let wins = tally[0] += 1;
        tally[0] = wins;
        console.log(`${name}'s record: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score < opponentHigh) {
        tie.forEach(name => console.log(`- ${name}'s score of ${opponentHigh} is higher than your score of ${score}.`));
        console.log(`You lost.`);
        let wins = tally[1] += 1;
        tally[1] = wins;
        console.log(`${name}'s record: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score === opponentHigh && tie.length < 2) {
        console.log(`- It's a tie!`);
        let wins = tally[2] += 1;
        tally[2] = wins;
        console.log(`${name}'s record: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score === opponentHigh) {
        console.log(`- It's a ${tie.length + 1}-way tie!!!`);
        let wins = tally[2] += 1;
        tally[2] = wins;
        console.log(`${name}'s record: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    }
    return tally;
}

let endGame = (name, tally, repeater) => {
        // Play Again function
    let repeat = prompt(`Play again? (y/n) `).toUpperCase();
    while (repeat != 'YES' && repeat != 'NO' && repeat != 'Y' && repeat != 'N') {
        repeat = prompt(`Please enter 'YES' or 'NO'.`).toUpperCase();
    }
    // yes conditions
    if (repeat == 'Y' || repeat == 'YES') {

        let str1 = `${name}'s current record:`;
        let str2 = ``;
        let str3 = ``;
        let str4 = ``;

        console.clear();
        
        if (tally[0] == 1) {
            str2 = ` ${tally[0]} win,`;
        } else {
            str2 = ` ${tally[0]} wins,`;
        }
        if (tally[1] == 1) {
            str3 = ` ${tally[1]} loss`;
        } else {
            str3 = ` ${tally[1]} losses`;
        }
        if (tally[2] == 1) {
            str4 = `, and a tie...`;
        } else if (tally[2] > 1) {
            str4 = `, and ${tally[2]} ties...`;
        } else {
            str4 = `...`;
        }

        let message = str1.concat(str2, str3, str4);

        console.log(message);
        console.log(`Setting up another game...`);

        return tally;

    } else if (repeat == 'N' || repeat == 'NO') { 
        
        // no conditions
        console.clear();

        let str1 = `Congratulations, ${name}! Your final record is`;
        let str2 = ``;
        let str3 = ``;
        let str4 = ``;

        if (tally[0] == 1) {
            str2 = ` ${tally[0]} win,`;
        } else {
            str2 = ` ${tally[0]} wins,`;
        }
        if (tally[1] == 1) {
            str3 = ` ${tally[1]} loss`;
        } else {
            str3 = ` ${tally[1]} losses`;
        }
        if (tally[2] == 1) {
            str4 = `, and a tie!`;
        } else if (tally[2] > 1) {
            str4 = `, and ${tally[2]} ties!`;
        } else {
            str4 = `!`
        }
        let message = str1.concat(str2, str3, str4);
        
        repeater = false;
        console.log(repeater);
        console.log(typeof(repeater));

        console.log(message);
        console.log(`Thanks for playing DiceGame! See you again soon!`);
        
        return repeater;
    }
}

module.exports = {declareWinner, endGame};