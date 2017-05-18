var express = require('express');

var app = express();

app.get("/", function(request, response)
{
	response.json({message:"welcome to express-generator tool"});
})

module.exports = app;
