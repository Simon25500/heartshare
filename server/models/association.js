const mongoose = require('mongoose');


const associationSchema = mongoose.Schema({
  name: { type: String, required: true },
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  description: { type: String },
  img_url: { type: String },
  events: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Event'} ],
  missions: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Mission'} ]
});


module.exports = mongoose.model('Association', associationSchema);