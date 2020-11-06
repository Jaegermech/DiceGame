    // User dice roll
    let userRoll = () => {
        console.log(`Starting game...`)
        let dice1 = (Math.floor(Math.random() * 6 + 1));
        let dice2 = (Math.floor(Math.random() * 6 + 1));
        let score = dice1 + dice2;
        console.log(`+ You rolled a ${dice1} and a ${dice2}, for a total of ${score}!`);
        return score;
    }

    // opponent dice roll(s)
    let dieRoll = (participants) => {
        scores = [];
        for (i = 0; i < participants.length; i++) {
            let roll1 = (Math.floor(Math.random() * 6 + 1));
            let roll2 = (Math.floor(Math.random() * 6 + 1));
            scores.push(roll1 + roll2);
            console.log(`* ${participants[i]} rolled a ${roll1} and ${roll2}, and got ${roll1+roll2}...`);
        }
        return scores;
    }

    module.exports = {userRoll, dieRoll};