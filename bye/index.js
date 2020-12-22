"use strict";

exports.handler = async (event) => {
    console.log("event:", JSON.stringify(event, null, 2));
    let result = {
        message: "Goodbye world! now = " + new Date().toString(),
    };
    return {
        statusCode: 200,
        body: JSON.stringify(result, null, 2),
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
};
