const gql = require("graphql-tag");

module.exports.createDrawing = gql`
    mutation CreateDrawing(
        $artist: String!
        $lines: [String!]!
        $type: String!
    ) {
        createDrawing(
            input: {
                isComplete: false
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

/*
module.exports.updateTally = gql`
    mutation MyMutation($id: ID = "", $count: Int = 10) {
        updateDrawingTally(input: { count: $count, id: $id }) {
            id
            count
        }
    }
`;
*/
