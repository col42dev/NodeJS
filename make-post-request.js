// http://docs.nodejitsu.com/articles/HTTP/clients/how-to-create-a-HTTP-request


var http = require('http');

//The url we want is `http://127.0.0.1:1337/`
var options = {
  host: 'http://127.0.0.1',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '1337',
  //This is what changes the request to a POST request
  method: 'POST'
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("hello world post request!");
req.end();