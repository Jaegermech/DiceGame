const prompt = require('prompt-sync')();

// setup
console.clear();
console.log(`Welcome to DiceGame!`);
console.log(`The object of this game is to get the highest die-roll with two virtual dice.`);
console.log(`Using the keypad and 'Enter' button, you can compete against one to six virtual players to see who can roll the highest score.`);

// Start game
let name = prompt(`What is your name? `);

while (name.length < 1) {
    name = prompt(`Please input your name... `);
    }

console.log(`Hey there, ${name}! Welcome to DiceGame!`);

let tally = [0, 0, 0];
let repeater = true;
while (repeater == true) {
    
    let size = prompt(`How many players would you like to compete against this round? `);

    while (size < 1 || size > 6 || isNaN(size)) {
        size = prompt(`Please enter a number between 1 and 6... `);
    }
    // User dice roll
    console.log(`Starting game...`)
    let dice1 = (Math.floor(Math.random() * 6 + 1));
    let dice2 = (Math.floor(Math.random() * 6 + 1));
    let score = dice1 + dice2;
    console.log(`+ You rolled a ${dice1} and a ${dice2}, for a total of ${score}!`);
    // score = 12;

    //Other Players
    const players = ['Alice', 'Ben', 'Chris', 'Denise', 'Eric', 'Felicia'];

    // create new array of players based on user's game size choice
    let participants = [];
    for (i = 0; i < size; i++) {
        participants.push(players[i]);
    }

    // run die rolls for each AI player
    scores = [];
    participants.forEach(dieRoll);

    function dieRoll(player){
        let roll1 = (Math.floor(Math.random() * 6 + 1));
        let roll2 = (Math.floor(Math.random() * 6 + 1));
        scores.push(roll1 + roll2);
        console.log(`* ${player} rolled a ${roll1} and ${roll2}, and got ${roll1+roll2}...`);
    }

    // compare results
    AIhigh = Math.max.apply(null, scores);

    // create array of winning bots' indexes
    const highs = [];
    scores.forEach((AIscore, index) => AIscore === AIhigh ? highs.push(index): null);

    // create an array of winning bots' names
    const tie = [];
    highs.forEach((index) => tie.push(participants[index]));

    // declare winner
    if (score > AIhigh) {
        console.log(`- You won with ${score}!`)
        let wins = tally[0] += 1;
        tally[0] = wins;
        console.log(`${name}: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score < AIhigh) {
        tie.forEach(name => console.log(`- ${name}'s score of ${AIhigh} is higher than your score of ${score}.`));
        console.log(`You lost.`);
        let wins = tally[1] += 1;
        tally[1] = wins;
        console.log(`${name}: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score === AIhigh && tie.length < 2) {
        console.log(`- It's a tie!`);
        let wins = tally[2] += 1;
        tally[2] = wins;
        console.log(`${name}: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    } else if (score === AIhigh) {
        console.log(`- It's a ${tie.length + 1}-way tie!!!`);
        let wins = tally[2] += 1;
        tally[2] = wins;
        console.log(`${name}: ${tally[0]}-${tally[1]}-${tally[2]}.`)
    }

    // Play Again function
    let repeat = prompt(`Play again? (y/n) `).toUpperCase();
        while (repeat != 'YES' && repeat != 'NO' && repeat != 'Y' && repeat != 'N') {
            repeat = prompt(`Please enter 'YES' or 'NO'.`).toUpperCase();
        }           
        if (repeat == 'Y' || repeat == 'YES') {
            console.clear();
            let str1 = `${name}'s current record:`;
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
                str4 = `, and a tie...`;
            } else if (tally[2] > 1) {
                str4 = `, and ${tally[2]} ties...`;
            } else {
                str4 = `...`;
            }
            let message = str1.concat(str2, str3, str4);
            console.log(message);
            console.log(`Setting up another game...`);
        } else if (repeat == 'N' || repeat == 'NO') { 
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
            console.log(message);
            console.log(`Thanks for playing DiceGame! See you again soon!`);
            repeater = false;
        }
    }