const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: 'email required!'
  },
  password: {
    type: String,
    required: 'password required!'
  }
});

module.exports = mongoose.model('User', userSchema);