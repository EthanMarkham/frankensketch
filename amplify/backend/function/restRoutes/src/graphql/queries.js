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
    return userData.data.data.getUser.userName;
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

const getOpenGames = async function (type, nextToken = null) {
    let input;
    switch (type) {
        default:
            throw new Error("Cannot create game with no type");
        case "head":
            input = {
                filter: { gameHeadId: { attributeExists: false } },
            };
            break;
        case "torso":
            input = {
                filter: { gameTorsoId: { attributeExists: false } },
            };
            break;
        case "legs":
            input = {
                filter: { gameLegsId: { attributeExists: false } },
            };
            break;
    }
    if (nextToken !== null) {
        input.nextToken = nextToken;
    }
    console.log("using input", input);

    const gameList = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        response: true,
        data: {
            query: print(listGames),
            variables: input,
        },
    });
    if (gameList.data.errors || !gameList.data.data.listGames) {
        console.log("Error listing games", gameList.data.errors);
        throw new Error("Oops! Something went wrong!");
    }
    let games = gameList.data.data.listGames.items;

    if (gameList.data.data.listGames.nextToken !== null) {
        const nextSet = await getOpenGames(
            type,
            gameList.data.data.listGames.nextToken
        );
        games = [...games, ...nextSet];
    }

    return games;
};
module.exports.getOpenGames = getOpenGames;

const listGames = gql`
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

module.exports.listGames = listGames;

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
