const { players } = require('./game');

const prompt = require('prompt-sync')();

let roomSize = () => {
    let size = prompt(`How many players would you like to compete against this round? `);

        while (size < 1 || size > 6 || isNaN(size)) {
            size = prompt(`Please enter a number between 1 and 6... `);
        }
        console.log(`Setting up a room with ${parseInt(size)+1} total players...`);
        return size;
    }

let room = (size) => { 
    //Other Players
    const players = ['Alice', 'Ben', 'Chris', 'Denise', 'Eric', 'Felicia'];
    let participants = [];

    // create new array of players based on user's game size choice
    for (i = 0; i < parseInt(size); i++) {
        participants.push(players[i]);
    }
    return participants;
}

module.exports = {roomSize, room};