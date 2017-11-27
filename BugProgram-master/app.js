var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql'); //mysqlを使うモジュールの読み込み
let databaseJson = require('./database.json'); //データベースの設定を取得
var session = require('express-session'); //sessionを管理するモジュールの読み込み

var routes = require('./routes/index');
var users = require('./routes/users');
var getOrderHistory = require('./routes/getOrderHistory');
var setOrderHistory = require('./routes/setOrderHistory');
var getUsername = require('./routes/getUsername');

var app = express();

/**
 * mysqlとの接続
 */
var connection = mysql.createConnection({
  host: 'localhost',
  user: databaseJson.dev.user,
  password: databaseJson.dev.password,
  database: databaseJson.dev.database
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * セッション管理の設定
 */
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 30 * 60 * 1000
  }
}));

app.use('/', routes);
app.use('/users', users);
app.use('/getOrderHistory', getOrderHistory);
app.use('/setOrderHistory', setOrderHistory);
app.use('/getUsername', getUsername);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
exports.connection = connection;