const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    associations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Association'}]
});


module.exports = mongoose.model('Category', categorySchema);