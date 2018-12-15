var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//#####################
var login = require('./routes/login');
var blog = require('./routes/blog');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// const assert = require('assert');
// let MongoClient = require('mongodb').MongoClient;
//
// const MONGODB_URI = 'mongodb://localhost:27017/test';
// let db;
//
// // Initialize connection once, reuse the database object
//
// MongoClient.connect(MONGODB_URI, function(err, database) {
//     assert.equal(null, err);
//     app.locals.db = database;
//     //when get error
//     if (err) {
//         console.log("Error connecting with MongoDB");
//     } else {
//         console.log("Connected successfully to MondoDB");
//     }
// });


//connected with mongoDB
//request made mongoDB only one time to decrase overhead
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'BlogServer';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  if(err) throw err;
  console.log("Connected successfully to server");

    app.locals.db = client.db(dbName);
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
//#####################
app.use('/login', login);
app.use('/blog', blog);
app.use('/api', api);



//####################
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
