//var express = require('express');
//var path = require('path');
//var open = require('open');

import express from 'express';
import path from 'path';
import open from 'open';

//Set up bundler
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database.
  res.json([
    {"id": 1, "firstName": "Rohit", "lastName": "Chauhan", "email": "rohit.chauhan@gmail.com"},
    {"id": 2, "firstName": "James", "lastName": "Bang", "email": "james.bang@gmail.com"},
    {"id": 3, "firstName": "Steven", "lastName": "Mitton", "email": "steven.mitton@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
