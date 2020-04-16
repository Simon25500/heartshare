const Association = require('../models/association');


exports.index = (req,res,next) => {
    Association.find().populate('category')
    .then(assoc => res.status(200).json(assoc))
    .catch(error => res.status(400).json({ error }));
}