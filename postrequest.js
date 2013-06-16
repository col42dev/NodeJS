// Post request

var request = require('request');

request.post(
    'http://127.0.0.1:1337/',
    { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);