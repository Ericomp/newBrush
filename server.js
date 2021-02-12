
//importing the module using (module name =express)
//triger the express function
var express = require('express');

//making an express application
//store the result of that in a variable called app
var app = express();


const port = process.env.PORT || 3000;
// var server = app.listen(port);
var server = app.listen(port, () => {
    console.log(`Starting server at ${port}`)
});

app.use(express.static('public'));


console.log("My socket server is running");
