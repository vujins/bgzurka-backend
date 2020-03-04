const express = require('express');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const cors = require('cors');

const app = express();

// enable all cors
app.use(cors());

// bodyparser
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

// if non of the above routes work, mark is as not found
app.use(errorHandlers.notFound);

module.exports = app;
