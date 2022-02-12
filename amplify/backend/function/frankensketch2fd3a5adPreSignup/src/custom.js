/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

const createUser = gql`
    mutation CreateUser(
        $input: CreateUserInput!
        $condition: ModelUserConditionInput
    ) {
        createUser(input: $input, condition: $condition) {
            id
            userName
            friends
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
        }
    }
`;

const listUserNames = gql`
    query ListUsers(
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                userName
            }
            nextToken
            startedAt
        }
    }
`;

exports.handler = async (event, context) => {
    let errors = [];
    //fetch userNames
    const users = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
            query: print(listUserNames),
            variables: {
                filter: {
                    userName: {
                        eq: event.request.userAttributes.preferred_username,
                    },
                },
            },
        },
    }).then((response) => response.data);

    if (users.errors) {
        console.log("Error Fetching Users", users.errors);
        throw new Error("Communication Error With AWS");
    } else if (users.data.listUsers.items.length > 0) {
        throw new Error("Username is taken");
    }

    //create new user
    const userCreated = await axios({
        url: process.env.API_GRAPHQL_GRAPHQLAPIENDPOINTOUTPUT,
        method: "post",
        headers: {
            "x-api-key": process.env.API_GRAPHQL_GRAPHQLAPIKEYOUTPUT,
        },
        data: {
            query: print(createUser),
            variables: {
                input: {
                    id: event.userName,
                    userName: event.request.userAttributes.preferred_username,
                    friends: [],
                },
            },
        },
    }).then((response) => response.data);

    if (userCreated.errors) {
        console.log("Error Creating User", userCreated.errors);
        throw new Error("Communication Error With AWS");
    } else {
        console.log(
            "Created User " + event.request.userAttributes.preferred_username
        );
        event.response.autoConfirmUser = true;
    }
    return event; //Continue with login method
};
