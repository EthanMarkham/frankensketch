const gql = require("graphql-tag");
var axios = require("axios");
var graphql = require("graphql");
var { print } = graphql;
var { getTally } = require("./queries");

module.exports.createDrawing = async function (artist, type, lines) {
    const mutation = gql`
        mutation CreateDrawing(
            $artist: String!
            $lines: [String!]!
            $type: String!
        ) {
            createDrawing(
                input: {
                    isComplete: true
                    isRemoved: false
                    lines: $lines
                    artist: $artist
                    type: $type
                }
            ) {
                id
                _deleted
                _lastChangedAt
                _version
                artist
                createdAt
                id
                isComplete
                isRemoved
                lines
                type
                updatedAt
            }
        }
    `;

    const drawingData = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(mutation),
            variables: {
                artist: artist,
                type: type,
                lines: lines,
            },
        },
    });
    if (drawingData.data.errors || !drawingData.data.data.createDrawing) {
        console.log(drawingData.data);
        throw new Error("Oops! Something went wrong!");
    }
    const drawing = drawingData.data.data.createDrawing;
    return drawing;
};

module.exports.incrementTally = async function (type) {
    const mutation = gql`
        mutation UpdateDrawingTally(
            $id: ID = ""
            $count: Int = 10
            $_version: Int!
        ) {
            updateDrawingTally(
                input: { count: $count, id: $id, _version: $_version }
            ) {
                count
            }
        }
    `;

    const { count, _version } = await getTally(type);
    //TODO: THIS NOT MUTATING
    await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        response: true,
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
            query: print(mutation),
            variables: {
                id: type,
                count: count + 1,
                _version: _version,
            },
        },
    });
};

module.exports.createPublicGame = async function (drawing) {
    var mutation;
    var gameInput;
    switch (drawing.type.toLowerCase()) {
        default:
            throw new Error("Cannot create game with no type");
        case "head":
            mutation = gql`
                mutation MyMutation($gameHeadId: ID = "") {
                    createGame(
                        input: { gameHeadId: $gameHeadId, nsfw: false }
                    ) {
                        id
                        gameHeadId
                        gameLegsId
                        gameTorsoId
                    }
                }
            `;
            gameInput = {
                gameHeadId: drawing.id,
            };
            break;
        case "torso":
            mutation = gql`
                mutation MyMutation($gameTorsoId: ID = "") {
                    createGame(
                        input: { nsfw: false, gameTorsoId: $gameTorsoId }
                    ) {
                        id
                        gameHeadId
                        gameLegsId
                        gameTorsoId
                    }
                }
            `;
            gameInput = {
                gameTorsoId: drawing.id,
            };
            break;
        case "legs":
            mutation = gql`
                mutation MyMutation($gameLegsId: ID = "") {
                    createGame(
                        input: { nsfw: false, gameLegsId: $gameLegsId }
                    ) {
                        id
                        gameHeadId
                        gameLegsId
                        gameTorsoId
                    }
                }
            `;
            gameInput = {
                gameLegsId: drawing.id,
            };
            break;
    }
    const userGame = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(mutation),
            variables: gameInput,
        },
    });
    return userGame.data.data.createGame;
};

module.exports.addDrawingToGame = async function (drawing, game) {
    var mutation;
    var gameInput;
    switch (drawing.type.toLowerCase()) {
        default:
            throw new Error("Cannot create game with no type");
        case "head":
            mutation = gql`
                mutation MyMutation(
                    $gameHeadId: ID!
                    $id: ID!
                    $_version: Int!
                ) {
                    updateGame(
                        input: {
                            id: $id
                            gameHeadId: $gameHeadId
                            _version: $_version
                        }
                    ) {
                        id
                        gameTorsoId
                        gameLegsId
                        gameHeadId
                        head {
                            artist
                            lines
                            type
                        }
                        legs {
                            artist
                            lines
                            type
                        }
                        torso {
                            artist
                            lines
                            type
                        }
                    }
                }
            `;
            gameInput = {
                gameHeadId: drawing.id,
                id: game.id,
                _version: game._version,
            };
            break;
        case "torso":
            mutation = gql`
                mutation MyMutation(
                    $gameTorsoId: ID!
                    $id: ID!
                    $_version: Int!
                ) {
                    updateGame(
                        input: {
                            id: $id
                            gameTorsoId: $gameTorsoId
                            _version: $_version
                        }
                    ) {
                        id
                        gameTorsoId
                        gameLegsId
                        gameHeadId
                    }
                }
            `;
            gameInput = {
                gameTorsoId: drawing.id,
                id: game.id,
                _version: game._version,
            };
            break;
        case "legs":
            mutation = gql`
                mutation MyMutation(
                    $gameLegsId: ID!
                    $id: ID!
                    $_version: Int!
                ) {
                    updateGame(
                        input: {
                            id: $id
                            gameLegsId: $gameLegsId
                            _version: $_version
                        }
                    ) {
                        id
                        gameTorsoId
                        gameLegsId
                        gameHeadId
                    }
                }
            `;
            gameInput = {
                gameLegsId: drawing.id,
                id: game.id,
                _version: game._version,
            };
            break;
    }

    const postedGame = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(mutation),
            variables: gameInput,
        },
    });
    return postedGame.data.data.updateGame;
};
