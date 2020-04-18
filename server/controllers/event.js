const Event = require('../models/event');


exports.index = (req,res,next) => {
    Event.find().sort('date').populate('association')
    .then(event => res.status(200).json(event))
    .catch(error => res.status(400).json( {error} ));
}
