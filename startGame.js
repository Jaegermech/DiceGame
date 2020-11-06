const prompt = require('prompt-sync')();

// setup
let intro = () => {
    console.clear();
    console.log(`Welcome to DiceGame!`);
    console.log(`The object of this game is to get the highest die-roll with two virtual dice.`);
    console.log(`Using the keypad and 'Enter' button, you can compete against one to six virtual players to see who can roll the highest score.`);
}

// Start game
let playerName = () => {
    JSON.stringify(name = prompt(`What is your name? `));

    while (name.length < 1) {
        name = prompt(`Please input your name... `);
        }

    console.log(`Hey there, ${name}! Welcome to DiceGame!`);

    return name;
}

module.exports = {intro, playerName};