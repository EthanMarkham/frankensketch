var axios = require("axios");
var graphql = require("graphql");
var { print } = graphql;
var { createDrawing } = require("../graphql/mutations");
var { getUserName } = require("../graphql/queries");

async function postGame(req, res) {
    const loginHeader = req.rawHeaders.find((h) =>
        h.includes("ACognitoSignIn")
    );
    const uuid = /(?<=ACognitoSignIn%3A).*?(?=%22)/.exec(loginHeader)[0];
    const { lineData, drawingType } = req.body;

    const lines = lineData.map((l) => JSON.stringify(l));
    const type = drawingType.toUpperCase();

    //Step: Get Current User

    const userData = await axios({
        url: process.env.API_FRAKENSKETCH_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_FRAKENSKETCH_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(getUserName(uuid)),
        },
    });

    if (userData.data.errors) {
        console.log(userData.data.errors);
    }

    const artist = userData.data.data.getUser.userName;

    //Step: Post drawing to db and get ID

    const drawingData = await axios({
        url: process.env.API_FRAKENSKETCH_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_FRAKENSKETCH_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(createDrawing),
            variables: {
                artist: artist,
                type: type,
                lines: lines,
            },
        },
    });

    if (drawingData.data.errors) {
        //ERROR HANDLE
    }
    const drawing = drawingData.data.data.createDrawing;

    return res.json(drawing);

    /*
    //STEP: INCREMENT DRAWING TALLY
    const tallyData = axios({
        url: process.env.API_FRAKENSKETCH_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        response: true,
        headers: {
            "x-api-key": process.env.API_FRAKENSKETCH_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
            query: print(getTally),
            variables: {
                id: type.toLowerCase(),
            },
        },
    });

    if (tallyData.data.errors) {
        //ERROR HANDLE
    }

    let tally = tallyData.data.data.getTally;
    console.log(tally);

    return res.json(drawing);

    //STEP: LOOK FOR GAME GAME MISSING THE TYPE
    let shouldCreate = false;

    let filter = {};
    switch (type) {
        case "HEAD":
            filter = { gameHeadId: { attributeExists: false } };
        case "TORSO":
            filter = { gameTorsoId: { attributeExists: false } };
        case "LEGS":
            filter = { gameLegsId: { attributeExists: false } };
        default:
    }

    const gameData = await axios({
        url: process.env.API_FRAKENSKETCH_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_FRAKENSKETCH_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(listGames),
            filter: filter,
        },
    });

    if (gameData.data.errors) {
        //ERROR HANDLE
    }

    if (gameData.data.data.length > 0) {
        //MUTATE AND ADD TO GAME
    } else {
        //NO GAMES FOUND
    }

    //STEP: ADD DRAWING TO GAME
    */
}

module.exports = postGame;
