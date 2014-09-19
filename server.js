var express = require('express');
 
var server = express();
server.use(express.static(__dirname + '/public'));
 
var port = 3000;
server.listen(port, function() {
    console.log("Server listening on port: [" + port + "]");
    console.log("Press Ctrl+C to stop the server");
});
