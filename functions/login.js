const jwt = require('jsonwebtoken');

exports.handler = function(event, context, callback) {
    jwt.sign({ foo: 'bar' }, 'mySecret', function(err, token) {
        callback(null, {
            statusCode: 200,
            body: token
        });
    });
};
