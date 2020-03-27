const express = require('express');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');

// load .env variables
const cors = require('cors');

const app = express();

// enable cors
const corsoptions = {
  origin: 'http://localhost:3000'
};
app.use(cors(corsoptions));

// bodyparser
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// if non of the above routes work, mark is as not found
app.use(errorHandlers.notFound);

module.exports = app;
