const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String },
  locationCity: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  start: { type: Date },
  stop: { type: Date },
  association:  {type: mongoose.Schema.Types.ObjectId, ref: 'Association'} 

});


module.exports = mongoose.model('Event', eventSchema);