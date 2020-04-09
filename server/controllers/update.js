const dds = require('../services/dondusang');
const benevolat = require('../services/benevolat');
const Association = require('../models/association');
const Mission = require('../models/mission');
const Event = require('../models/event');
const schedule = require('node-schedule');

async function update() {
  await Event.deleteMany({})
  await Association.deleteMany({})
  await Mission.deleteMany({})
  await dds.update();
  await benevolat.update();
}

schedule.scheduleJob('* * 0 * * *', async () => {
  await Event.deleteMany({name: "Collecte don du sang"})
  await Association.deleteMany({name:"Établissement français du sang"})
  await dds.update();
})


  exports.update = (req,res,next) => {
    update().then(()=> {
      res.status(200).json("up to date");
    })
  }


