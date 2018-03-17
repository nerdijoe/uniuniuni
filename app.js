var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var random = require('./routes/random');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/random', random);

app.listen(3000,function() {
  console.log('App is listening on port 3000!')
})

module.exports = app;
