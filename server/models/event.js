const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  date: { type: Date },
  start: { type: String },
  stop: { type: String },
  association:  {type: mongoose.Schema.Types.ObjectId, ref: 'Association'} 

});


module.exports = mongoose.model('Event', eventSchema);