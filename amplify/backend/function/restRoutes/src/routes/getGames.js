const {
    queryDrawingsByArtist,
    queryGamesByUser,
} = require("../dynamoDB/queries");

async function getGames(req, res) {
    //const artist = req.params.artist;
    const { artist } = req.body;
    console.log("getting the games");
    try {
        const data = await queryDrawingsByArtist(artist);
        const games = await queryGamesByUser(data);

        res.json({ body: JSON.stringify(games) });
    } catch (err) {
        console.log(err);
        res.json({ error: err });
    }
}

module.exports = getGames;
