const jwt = require('jsonwebtoken');

module.exports = fn => (...args) => {
    const [context] = args;
    // using context.queryStringParameters.token as a token holder is for the sake of the demo.
    // use cookies or an authorization header if you want to use it in prod
    if(!context.queryStringParameters.token) {
        return unauthResp(...args);
    }
    jwt.verify(context.queryStringParameters.token, 'mySecret', function(err, decoded) {
        if(err) {
            return unauthResp(...args);
        }
        return fn(...args)
    });
};


const unauthResp = (event, context, callback) => {
    callback(null, {
        statusCode: 400,
        body: 'Not authenticated',
    });
};
