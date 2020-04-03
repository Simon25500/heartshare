const Association = require('../models/association');
const Event = require('../models/event');
const fetch = require('node-fetch');


exports.update = () => {

    const association = new Association({
        name: "Établissement français du sang",
        description: "L'Établissement français du sang est un établissement public administratif avec des prérogatives d'établissement public à caractère industriel et commercial1 chargé de collecter, préparer, qualifier et distribuer les produits sanguins labiles (sang, plasma, plaquettes) en France, en vue de leur transfusion.",
        type: "Don du Sang",
        img_url: "https://resize.aixenprovencetourism.com/img.ashx?w=750&h=750&r=crop&u=http://odms.aixenprovencetourism.com/ODMS/OpenData/Medias/66403/PATIO-1e56c00d-37d1-416b-a39a-8e35e7e8b918_636326765665578750.jpg"
    });


    fetch('http://api.openeventdatabase.org/event?when=NEXTMONTH&what=health.blood.collect' , {
        method: 'GET',
        headers: { "Content-Type": "application/json" }
    }).then(response => response.json())
    .then(data => {
        data.features.forEach(element => {         
            const event = new Event({ 
                location: element.properties.name,
                locationCity: element.properties["where:name"] ,
                name: 'Collecte don du sang',
                lat: element.properties.lat,
                lng: element.properties.lon,
                start: new Date(element.properties.start.slice(0,19)),
                stop: new Date(element.properties.stop.slice(0,19)),
                association: association._id
            });
            event.save()
            association.events.push(event._id)
            
        });
        association.save()
    })

}
