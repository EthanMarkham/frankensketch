var { listDrawingTallies } = require("../graphql/queries");

async function startGame(req, res) {
    const tallies = await listDrawingTallies();

    const minTally = tallies.reduce((acc, val) => {
        if (!acc) return val;
        else if (acc.count > val.count) return val;
        else if (acc.count < val.count) return acc;
        else return Math.round(Math.random()) === 1 ? acc : val;
    });

    res.json({ drawing: minTally.id });
}

module.exports = startGame;
