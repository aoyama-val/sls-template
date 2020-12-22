"use strict";

const AWS = require("aws-sdk");

exports.handler = async (event) => {
    const docClient = new AWS.DynamoDB.DocumentClient();
    await docClient.put({
        TableName: process.env.DYNAMODB_TABLE_NAME,
        Item: {
            pk: "hello",
            sk: new Date().toISOString(),
        },
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                //input: event,
            },
            null,
            2
        ),
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
};
