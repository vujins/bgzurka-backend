const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
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
  date: {
    type: Date,
    required: 'Please enter an event date!'
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

eventSchema.index({
  location: '2dsphere'
})

eventSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next();
    return;
  }
  this.slug = slug(this.name + '-' + this.created.getTime());
  next();
});

module.exports = mongoose.model('Event', eventSchema);
