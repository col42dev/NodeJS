// Post request

var http = require('http');
var options = {
  host: 'www.google.com',
  path: '/index.html'
};

http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
}).on('error', function(e) {
  console.log('ERROR: ' + e.message);
});