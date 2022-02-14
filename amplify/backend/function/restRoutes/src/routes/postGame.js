var {
    createDrawing,
    incrementTally,
    createPublicGame,
    addDrawingToGame,
} = require("../graphql/mutations");
var { getUserName, getOpenGames } = require("../graphql/queries");

async function postGame(req, res) {
    /* OLD METHOD USED TO GRAB SIGN-IN OUT OF HEADER 
    const loginHeader = req.rawHeaders.find((h) =>
        h.includes("ACognitoSignIn")
    );
    const uuid = /(?<=ACognitoSignIn%3A).*?(?=%22)/.exec(loginHeader)[0];
    */
    const { lineData, drawingType, username } = req.body;

    const lines = lineData.map((l) => JSON.stringify(l));
    const type = drawingType.toLowerCase();
    const artist = await getUserName(username);

    const drawing = await createDrawing(artist, type, lines);
    console.log("Created Drawing", drawing);

    incrementTally(type);

    const gameList = await getOpenGames(type);
    console.log(gameList);
    const game =
        gameList !== null && gameList.length > 0
            ? await addDrawingToGame(drawing, gameList[0])
            : await createPublicGame(drawing);

    console.log(
        gameList !== null && gameList.length ? "Updated Game" : "Created Game",
        game
    );
    game.isComplete =
        game.gameLegsId && game.gameHeadId && game.gameTorsoId ? true : false;

    return res.json({ game: game });
}

module.exports = postGame;
