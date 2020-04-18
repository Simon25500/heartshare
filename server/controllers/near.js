const Event = require('../models/event');
const Mission = require('../models/mission');

const geocoding = (test,lat,lng) => {
    if (test.lat <= (lat + 0.5) && test.lat >= (lat - 0.5) && test.lng <= (lng + 1) && test.lng >= (lng - 1)) {
        return true
    } else {
        return false
    }
}


exports.index = (req, res, next) => {
    Event.find().sort('date').populate('association')
    .then(events => {
        Mission.find().sort('date').populate('association')
        .then(missions => {
            const event = events.filter(event => geocoding(event,parseFloat(req.body.lat),parseFloat(req.body.lng)) )
            const mission = missions.filter(mission => geocoding(mission,parseFloat(req.body.lat),parseFloat(req.body.lng)))
            res.status(200).json(mission.concat(event))
        })
        
    })
    .catch(error => res.status(400).json( null ));
}
