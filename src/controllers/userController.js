const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = async (req, res) => {
  const user = await new User(req.body).save();
  res.send(user);
}

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
}