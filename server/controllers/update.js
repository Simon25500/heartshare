const dds = require('../services/dondusang')
const Association = require('../models/association');
const Event = require('../models/event');
const schedule = require('node-schedule');

async function update() {
  await Event.deleteMany({})
  await Association.deleteMany({})
  await dds.update();
}

schedule.scheduleJob('* * 0 * * *', () => {
  update();
})


  exports.update = (req,res,next) => {
    update();
    res.status(200).json("up to date");
  }