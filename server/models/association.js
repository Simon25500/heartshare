const mongoose = require('mongoose');


const associationSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  category: { type: String },
  description: { type: String },
  img_url: { type: String },
  location: { type: String},
  lat: { type: Number },
  lng: { type: Number },
  events: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Event'} ],
  missions: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Mission'} ]
});


module.exports = mongoose.model('Association', associationSchema);