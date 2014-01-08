var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/view'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

app.listen(3000);
console.log("listening on port 3000");