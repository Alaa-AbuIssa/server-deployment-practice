'use strict';
const express = require('express');
const app = express();
const notFoundHandler=require('./error-handlers/404');
const errorHandler=require('./error-handlers/500');


function start(prot) {
  app.listen(prot, () => {
    console.log(`Start Listening on PORT ${prot}`);
  });
}


app.get('/', (req, res) => {
  res.status(200).send('Hello From Alaa');
});

app.get('/error', (req, res) => {
  throw new Error('Something Error');
});

app.use('*', notFoundHandler); 
app.use(errorHandler);

module.exports = {
  app: app,
  start: start,
};