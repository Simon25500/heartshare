const dds = require('../services/dondusang');
const benevolat = require('../services/benevolat');
const Association = require('../models/association');
const Mission = require('../models/mission');
const Event = require('../models/event');
const schedule = require('node-schedule');
const Category = require('../models/category')
const categoryserve = require('../services/category');

async function update() {
  await Category.deleteMany({});
  await console.log("cat delete")
  await Event.deleteMany({});
  await console.log("ev delete")
  await Association.deleteMany({});
  await console.log("ass delete")
  await Mission.deleteMany({});
  await console.log("miss delete")
  await benevolat.update();
  await console.log("ben done")
  await dds.update();
  await console.log("dds done")
  await categoryserve.update()
}

schedule.scheduleJob('* * 0 * * *', async () => {
  await Event.deleteMany({name: "Collecte don du sang"})
  await Association.deleteOne({name:"Établissement français du sang"})
  await Category.deleteMany({});
  await dds.update();
  await categoryserve.update()
})


  exports.update = (req,res,next) => {

    update().then(() => {
      res.status(200).json("up to date");
    })
  }


