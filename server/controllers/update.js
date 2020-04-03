const dds = require('../services/dondusang')
const Association = require('../models/association');
const Event = require('../models/event');

async function deleteall() {
  await Event.deleteMany({})
  await Association.deleteMany({})
}

exports.delete = (req, res, next) => {
    deleteall()
    res.status(200).json({message: "delete !"})
  };

  exports.update = (req,res,next) => {
    dds.update();
    res.status(200).json("up to date");
  }