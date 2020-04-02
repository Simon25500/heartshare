const mongoose = require('mongoose');


const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  locationName: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  association:  {type: mongoose.Schema.Types.ObjectId, ref: 'Association'} 

});


module.exports = mongoose.model('Event', eventSchema);