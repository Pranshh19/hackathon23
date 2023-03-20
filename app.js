var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var heroRouter = require('./routes/hero');
var blog_landRouter = require('./routes/blog_land');
var QuotesRouter = require('./routes/quote');

//Layout
const expressLayout =require('express-ejs-layouts')
var app = express();


// view engine setup and Layout
app.use(expressLayout);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', heroRouter);
app.use('/blog_land', blog_landRouter);
app.use('/quote', QuotesRouter);

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
