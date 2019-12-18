const authWrapper = require('../utils/authenticate-wrapper');

exports.handler = authWrapper(function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "You can edit our amazing products"
    });
})
