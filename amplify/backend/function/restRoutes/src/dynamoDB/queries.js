var AWS = require("aws-sdk");
const DynamoDB = require("aws-sdk/clients/dynamodb");
const ddb = new DynamoDB({ region: process.env.REGION });

const query = async (params) => {
    const { Items: items = [] } = await ddb
        .query({
            ...params,
            Limit: 100,
        })
        .promise();

    return items.map(AWS.DynamoDB.Converter.unmarshall);
};

const queryBatch = async (filter) => {
    let items = [];
    await Promise.all(
        filter.map(async (params) => {
            const data = await query(params);
            items = [...items, ...data];
        })
    );
    return items;
};

module.exports.queryDrawingsByArtist = async function (artist) {
    console.log("querying for artist", artist);
    const params = {
        TableName: process.env.API_GRAPHQL_DRAWINGTABLE_NAME,
        IndexName: "artist-createdAt-index",
        KeyConditionExpression: "artist = :artist",
        ExpressionAttributeValues: {
            ":artist": { S: "ethan" },
        },
    };
    const items = await query(params);
    return items;
};

module.exports.queryGamesByUser = async function (drawings) {
    const filter = drawings.map(({ type, id }) => {
        let KeyConditionExpression, IndexName;
        switch (type) {
            default:
            case "head":
                KeyConditionExpression = "gameHeadId = :id";
                IndexName = "gameHeadId-index";
                break;
            case "torso":
                KeyConditionExpression = "gameTorsoId = :id";
                IndexName = "gameTorsoId-index";
                break;
            case "legs":
                KeyConditionExpression = "gameLegsId = :id";
                IndexName = "gameLegsId-index";
                break;
        }
        const params = {
            TableName: process.env.API_GRAPHQL_GAMETABLE_NAME,
            IndexName,
            KeyConditionExpression,
            ExpressionAttributeValues: { ":id": { S: id } },
        };
        console.log(params);
        return params;
    });

    return await queryBatch(filter);
};
