const Association = require('../models/association');
const Category = require('../models/category');
const Event = require('../models/event');
const fetch = require('node-fetch');


exports.update = async () => {

    const category = await new Category({
        name: "Don du Sang"
    }).save()

    const association = await new Association({
        name: "Établissement français du sang",
        description: "L'Établissement français du sang est un établissement public administratif avec des prérogatives d'établissement public à caractère industriel et commercial1 chargé de collecter, préparer, qualifier et distribuer les produits sanguins labiles (sang, plasma, plaquettes) en France, en vue de leur transfusion.",
        category: category._id,
        img_url: "https://resize.aixenprovencetourism.com/img.ashx?w=750&h=750&r=crop&u=http://odms.aixenprovencetourism.com/ODMS/OpenData/Medias/66403/PATIO-1e56c00d-37d1-416b-a39a-8e35e7e8b918_636326765665578750.jpg"
    })
    await association.save().then( async () => {
        category.associations.push(association._id);
        let now = new Date();
    const current = new Date(`${now.getMonth()}/${now.getDate()+15}/${now.getFullYear()}`);

    while ((now.getDate() +1) != current.getDate()){
        console.log(now)
        await fetch(`https://api.efs.sante.fr/carto-api/v2/SamplingCollection/SearchInSquare?NorthEastLatitude=56&NorthEastLongitude=13&SouthWestLatitude=36&SouthWestLongitude=-13&MaxDate=${now.toLocaleDateString()}&Limit=100000&UserLatitude=0&UserLongitude=0`, {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
    .then(async data => {
        await data.forEach(async elements => {         
            await elements.collections.forEach(async element => {
                const event = await  new Event({ 
                    location: elements.fullAddress,
                    name: 'Collecte don du sang',
                    lat: elements.latitude,
                    lng: elements.longitude,
                    date: new Date(element.date),
                    start: (element.morningStartTime === null ? element.afternoonStartTime: element.morningStartTime),
                    stop:  (element.morningEndTime === null ? element.afternoonEndTime: element.morningEndTime),
                    association: association._id
                });
                await event.save()
                await association.events.push(event._id)
            });
        });
    })
    await now.setDate(now.getDate() + 1)
}
   await association.save()
    });
    
}

  