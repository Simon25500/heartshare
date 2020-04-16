const Category = require('../models/category');
const Association = require('../models/association');

const importAssocId = (name) => {
    Category.findOne({name: name}).then(res => {
        console.log(res)
        Association.find({category: res._id}).then(assoc => {
            console.log(assoc)
            assoc.forEach(element => {
                res.associations.push(element._id)
            })
            console.log(res)
            res.save()
        })
    })
}

exports.update = async () => {
    await importAssocId("Don du Sang");
    await importAssocId("Benevolat");
}
