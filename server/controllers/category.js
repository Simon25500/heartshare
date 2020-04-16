const Category = require('../models/category')

exports.index = (req,res,next) => {
    Category.find().populate('associations')
    .then(category => res.status(200).json(category))
    .catch(err => res.status(400).json({err}))
}

