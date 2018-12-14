const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express()
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', indexRouter);

module.exports = app;
