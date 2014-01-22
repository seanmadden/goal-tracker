var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/view'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(3000);
console.log("listening on port 3000");