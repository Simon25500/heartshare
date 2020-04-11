const Event = require('../models/event');

const geocoding = (test,lat,lng) => {
    if (test.lat <= (lat + 0.5) && test.lat >= (lat - 0.5) && test.lng <= (lng + 1) && test.lng >= (lng - 1)) {
        return true
    } else {
        return false
    }
}




exports.index = (req,res,next) => {
    Event.find().sort('date').populate('association')
    .then(event => res.status(200).json(event))
    .catch(error => res.status(400).json( {error} ));
}


exports.near = (req,res,next) => {
    Event.find().sort('date').populate('association')
    .then(events => res.status(200).json(events.filter(event => geocoding(event,req.body.lat,req.body.lng) )))
    .catch(error => res.status(400).json( null ));
}