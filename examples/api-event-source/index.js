"use strict";

exports.handler = async (event, context, callback) => {
  console.log("start", JSON.stringify(event));

  return {
    statusCode: 200,
    body: "OK v1"
  };
};
