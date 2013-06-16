// install request module using 
//     npm install request
// http://www.sitepoint.com/making-http-requests-in-node-js/

var request = require("request");

request("http://127.0.0.1:1337/", function(error, response, body) {

  console.log(body);

});
