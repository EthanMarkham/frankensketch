/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

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

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    //CUSTOM//
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    //
    next();
});

var routes = require("./routes");
app.use("/", routes);

app.listen(3000, function () {
    console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
