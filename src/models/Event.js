const mongoose = require('mongoose');
const slug = require('slugs');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter an event name!'
  },
  slug: String,
  created: {
    type: Date,
    default: Date.now
  },
  tags: [String],
  description: {
    type: String,
    trim: true
  },
  location: {
    type: {
      type: String,
      defualt: 'Point'
    },
    coordinates: [{
      type: Number,
      required: 'Coordinates required!'
    }],
    address: {
      type: String,
      required: 'Address required!'
    }
  }
});

eventSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name + '-' + this.created.getTime());
  next();
});

module.exports = mongoose.model('Event', eventSchema);
