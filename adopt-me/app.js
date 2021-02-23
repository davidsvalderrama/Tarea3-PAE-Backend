const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//Handlebars
const hbs = require('express-handlebars');


//Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//Handle hbs
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'Layout', layoutsDir: __dirname + '/views/Layouts'}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/', indexRouter);



/**
 * app.use(function(req, res, next) {
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
 */
// catch 404 and forward to error handler


module.exports = app;
