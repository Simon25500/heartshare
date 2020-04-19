const Event = require('../models/event');
const Mission = require('../models/mission');


exports.index = (req,res,next) => {
    Event.find().sort('date').populate('association')
    .then(event => res.status(200).json(event))
    .catch(error => res.status(400).json( {error} ));
}

exports.show = (req,res,next) => {
    Event.findOne({_id: req.params.id}).populate('association')
    .then(event => {
        if (event){
            res.status(200).json(event)
        } else {
            Mission.findOne({_id: req.params.id}).populate('association')
            .then(mission => res.status(200).json(mission))
        }
    })
    .catch(error => res.status(400).json( { error }))
}
