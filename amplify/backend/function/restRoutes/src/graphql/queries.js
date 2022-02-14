const gql = require("graphql-tag");
var axios = require("axios");
var graphql = require("graphql");
var { print } = graphql;

module.exports.getUserName = async function (username) {
    const query = gql`query MyQuery {
        getUser(id: "${username}") {
                userName
            }
        }`;

    const userData = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(query),
        },
    });
    if (userData.data.errors || !userData.data.data.getUser) {
        console.log(userData.data);
        throw new Error("Oops! Something went wrong!");
    }
    return userData.data.data.getUser;
};

module.exports.listDrawingTallies = async function () {
    const query = gql`
        query MyQuery {
            listDrawingTallies {
                items {
                    id
                    count
                    _version
                }
            }
        }
    `;
    const tallyData = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(query),
        },
    });
    return tallyData.data.data.listDrawingTallies.items;
};

module.exports.getOpenGames = async function (type) {
    var query;
    switch (type) {
        default:
            throw new Error("Cannot create game with no type");
        case "head":
            query = gql`
                query MyQuery {
                    listGames(
                        filter: { gameHeadId: { attributeExists: false } }
                        limit: 10
                    ) {
                        items {
                            id
                            gameTorsoId
                            gameLegsId
                            gameHeadId
                            _version
                        }
                    }
                }
            `;
            break;
        case "torso":
            query = gql`
                query MyQuery {
                    listGames(
                        filter: { gameTorsoId: { attributeExists: false } }
                        limit: 10
                    ) {
                        items {
                            id
                            gameTorsoId
                            gameLegsId
                            gameHeadId
                            _version
                        }
                    }
                }
            `;
            break;
        case "legs":
            query = gql`
                query MyQuery {
                    listGames(
                        filter: { gameLegsId: { attributeExists: false } }
                        limit: 10
                    ) {
                        items {
                            id
                            gameTorsoId
                            gameLegsId
                            gameHeadId
                            _version
                        }
                    }
                }
            `;
            break;
    }

    const gameList = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(query),
        },
    });
    if (gameList.data.errors || !gameList.data.data.listGames) {
        console.log("Error listing games", gameList.data.errors);
        throw new Error("Oops! Something went wrong!");
    }
    return gameList.data.data.listGames.items;
};

module.exports.listGames = gql`
    query ListGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                gameHeadId
                gameTorsoId
                gameLegsId
                _version
            }
            nextToken
            startedAt
        }
    }
`;

module.exports.getTally = async function (type) {
    const query = gql`
        query MyQuery($id: ID = "${type}") {
            getDrawingTally(id: $id) {
                count
                _version
            }
        }
    `;
    const tallyData = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        response: true,
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
            query: print(query),
        },
    });
    if (tallyData.data.errors) {
        console.log(tallyData.data);
        throw new Error("Oops! Something went wrong!");
    }
    return tallyData.data.data.getDrawingTally;
};
