var http = require('http');
var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
var Routes = require('./routes/route');

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/crudDb');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', Routes);

http.createServer(app).listen(port);
