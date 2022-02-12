var axios = require("axios");
var graphql = require("graphql");
var { print } = graphql;
var { listDrawingTallies } = require("../graphql/queries");

async function startGame(req, res) {
    console.log(process.env.AUTH_FRANKENSKETCH2FD3A5AD_USERPOOLID);
    const tallyData = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(listDrawingTallies),
        },
    });

    const tallies = tallyData.data.data.listDrawingTallies.items;

    const minTally = tallies.reduce((acc, val) => {
        if (!acc) return val;
        else if (acc.count > val.count) return val;
        else if (acc.count < val.count) return acc;
        else return Math.round(Math.random()) === 1 ? acc : val;
    });

    res.json({ drawing: minTally.id });
}

module.exports = startGame;
