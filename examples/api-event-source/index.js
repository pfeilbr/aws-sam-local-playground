'use strict';

exports.handler = (event, context, callback) => {
    console.log('start', JSON.stringify(event))

    callback(null, {
        statusCode: 200,
        body: "OK"
    })

}