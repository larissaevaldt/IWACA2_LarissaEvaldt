/*
code written by Mikhail in class, taken from https://github.com/mikhail-cct/mongodb-test
and adapted to suit my project
*/
var logger = require("morgan"),
cors = require("cors"),
http = require("http"),
path = require('path'),
express = require("express"),
bodyParser = require("body-parser"),
mongoose = require('mongoose');
require('dotenv').config();

var app = express();
var server = http.createServer(app);
var port = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'views')));
app.use(express.urlencoded({extended: true}));
app.use(require('./routes'));


server.listen(process.env.PORT || port, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("Server is listening at ", addr.address + ":" + addr.port);
});

// mongoose.connect('mongodb://localhost/test');
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});