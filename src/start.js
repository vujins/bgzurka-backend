const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config();

// mongodb
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log(`💚💚💚 -> ${process.env.DB_URL}`);
  });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.log(`🔴🔴🔴 -> ${err.message}`);
});

// import models
require('./models/Event');
require('./models/User');

// start server
const app = require('./app');
const server = app.listen(process.env.PORT || 7777, () => {
  console.log(`❤️❤️❤️ express -> PORT ${server.address().port}`);
});
