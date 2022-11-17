let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let nunjucks = require('nunjucks')

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

nunjucks.configure([
  "node_modules/govuk-frontend/",
  "views"
], {
  autoescape: true,
  express: app
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;