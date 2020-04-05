const mongoose = require('mongoose');


const associationSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  description: { type: String },
  img_url: { type: String },
  location: { type: String},
  lat: { type: Number },
  lng: { type: Number },
  events: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Event'} ]

});


module.exports = mongoose.model('Association', associationSchema);