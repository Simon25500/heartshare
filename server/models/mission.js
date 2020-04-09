const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String },
  description: { type: String },
  location: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  date: { type: Date },
  duree: { type: String },
  disponibilite: { type: String },
  frequence: { type: String },
  association:  {type: mongoose.Schema.Types.ObjectId, ref: 'Association'} 
});


module.exports = mongoose.model('Mission', missionSchema);