const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.createEvent = async (req, res) => {
  const event = await new Event(req.body).save();
  console.log(event);

  res.send(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.find({
    date: { $gt: Date.now() }
  }).sort({
    date: 1
  });
  res.send(events);
};
