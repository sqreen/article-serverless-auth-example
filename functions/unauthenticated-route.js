exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: "You can see our amazing products"
    });
};
