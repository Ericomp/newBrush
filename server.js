
//importing the module using (module name =express)
//triger the express function
var express = require('express');

//making an express application
//store the result of that in a variable called app
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));


console.log("My socket server is running");
