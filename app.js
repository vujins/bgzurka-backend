const express = require('express');
const mongoose = require('mongoose')

// import environmental variables from our variables.env file
require('dotenv').config();

const app = express();

// mongodb
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
  console.log(`💚💚💚 -> ${process.env.DB_URL}`);
});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.log(`🔴🔴🔴 -> ${err.message}`);
})


app.use('/', (req, res) => {
  res.json({
    msg: '🔥'
  });
});

const server = app.listen(process.env.PORT || 7777, () => {
  console.log(`Express running -> PORT ${server.address().port}`);
});
