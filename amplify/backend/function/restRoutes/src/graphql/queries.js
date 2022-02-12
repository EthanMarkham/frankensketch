const gql = require("graphql-tag");

module.exports.getUserName = function (id) {
    return gql`query MyQuery {
        getUser(id: "${id}") {
                userName
            }
        }`;
};

module.exports.listDrawingTallies = gql`
    query MyQuery {
        listDrawingTallies {
            items {
                id
                count
            }
        }
    }
`;
/*
module.exports.listGames = gql`
    query ListGames(
        $filter: ModelGameFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                password
                nsfw
                deleted
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                gameHeadId
                gameTorsoId
                gameLegsId
            }
            nextToken
            startedAt
        }
    }
`;

module.exports.getTally = gql`
    query MyQuery($id: ID = "legs") {
        getDrawingTally(id: $id) {
            id
            count
        }
    }
`;
*/
