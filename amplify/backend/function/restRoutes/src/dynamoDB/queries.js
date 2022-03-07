/* Amplify Params - DO NOT EDIT
	API_GRAPHQL_DRAWINGTABLE_ARN
	API_GRAPHQL_DRAWINGTABLE_NAME
	API_GRAPHQL_DRAWINGTALLYTABLE_ARN
	API_GRAPHQL_DRAWINGTALLYTABLE_NAME
	API_GRAPHQL_GAMETABLE_ARN
	API_GRAPHQL_GAMETABLE_NAME
	API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT
	API_GRAPHQL_GRAPHQLAPIIDOUTPUT
	API_GRAPHQL_GRAPHQLAPIKEYOUTPUT
	API_GRAPHQL_USERLIKETABLE_ARN
	API_GRAPHQL_USERLIKETABLE_NAME
	API_GRAPHQL_USERREPORTTABLE_ARN
	API_GRAPHQL_USERREPORTTABLE_NAME
	API_GRAPHQL_USERTABLE_ARN
	API_GRAPHQL_USERTABLE_NAME
	AUTH_FRANKENSKETCH2FD3A5AD_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

var AWS = require("aws-sdk");
const DynamoDB = require("aws-sdk/clients/dynamodb");
const ddb = new DynamoDB();

module.exports.queryDrawingsByArtist = async function (artist) {
    const { Items = [] } = await ddb
        .executeStatement({
            Statement: `
	      SELECT * FROM "${process.env.API_GRAPHQL_DRAWINGTABLE_NAME}"."artist-createdAt-index"
	      WHERE "artist" = ?
	    `,
            Parameters: [{ S: artist }],
        })
        .promise();
    const results = Items.map(AWS.DynamoDB.Converter.unmarshall);
    return results;
};

module.exports.queryGamesByUser = async function (drawings) {
    const filter = drawings.map(({ type, id }) => ({
        SQL: `${
            type === "head"
                ? "gameHeadId"
                : type === "torso"
                ? "gameTorsoId"
                : "gameLegsId"
        } = ?`,
        param: { S: id },
    }));

    const statement = `
	      SELECT * FROM "${process.env.API_GRAPHQL_GAMETABLE_NAME}"
	      WHERE gameHeadId IS NOT NULL AND gameHeadId IS NOT NULL AND gameHeadId IS NOT NULL ${
              filter.length > 0 ? "AND" : ""
          } (${filter.map(({ SQL }) => SQL).join(" OR ")})
	    `;

    const { Items = [] } = await ddb
        .executeStatement({
            Statement: statement,
            Parameters: filter.map((f) => f.param),
        })
        .promise();
    const results = Items.map(AWS.DynamoDB.Converter.unmarshall);

    return results;
};
