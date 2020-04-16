const cheerio = require('cheerio');
const request = require('request');
const Mission = require('../models/mission');
const Association = require('../models/association');
const Category = require('../models/category');
const geocode = require('../services/geocode')

const association = async  () => {
    const category = await new Category({
        name: "Benevolat"
    }).save()
    assoc = {}
    for (let i = 1; i < 11; i++) {
        await request({
            method: 'GET',
            url: `https://www.francebenevolat.org/benevoles/recherche-missions?mots-cles=&lieu=&nom-asso=&lieu-asso=&assoc-nom=&evenements=&frequences=&parution-debut=&asso-evenements=&asso-frequences=&ismissions=1&p=${i}`
        }, async  (err, res, body) => {
        
            if (err) return console.error(err);
        
            let $ = cheerio.load(body);
        
            
            await $('.clearfix .main a').each(async function (i, e) {
                let url = $(this).attr('href');
                
                await request({
                    method: 'GET',
                    url: `https://www.francebenevolat.org${url}`
                }, async (err, res, body) => {
                    if (err) return console.error(err);
    
                    let $ = cheerio.load(body);
                    let name = $('#fiche-annonce-asso h3').text()
                    
                    if (!assoc[name]) {
                        assoc[name] = {  
                            name: name,
                            category: category._id,
                            description: $('#fiche-annonce-asso .body-text p').text(),
                            img_url: `https://www.francebenevolat.org/${$('#fiche-annonce-asso img').attr('src')}`
                            }
                       const association = await new Association(assoc[name]).save()                        
                    }                          
                })
            })
        });
    }
    await category.save()
}



const mission = async () => {
    for (let i = 1; i < 11; i++) {
       await request({
            method: 'GET',
            url: `https://www.francebenevolat.org/benevoles/recherche-missions?mots-cles=&lieu=&nom-asso=&lieu-asso=&assoc-nom=&evenements=&frequences=&parution-debut=&asso-evenements=&asso-frequences=&ismissions=1&p=${i}`
        },async (err, res, body) => {
        
            if (err) return console.error(err);
        
            let $ = await cheerio.load(body);
        
            
            await $('.clearfix .main a').each(async function (i, e) {
                let url = $(this).attr('href');
                
               await request({
                    method: 'GET',
                    url: `https://www.francebenevolat.org${url}`
                }, async (err, res, body) => {
                    if (err) return console.error(err);
    
                    let $ = cheerio.load(body);

                   await Association.findOne({name: $('#fiche-annonce-asso h3').text()}).exec(async (err,assoc) => {
                        if (err) return console.error(err);
                        
                        if (assoc !== null) {
                            geocode.geocode($('.place p').text().replace(/\s+/g, " ")).then( async res => {
                                let mission = await new Mission({
                                    name: $('h1').text(),
                                    description: $('#fiche-desc .body-text p').text(),
                                    location: $('.place p').text().replace(/\s+/g, " "),
                                    duree: $('.duration p').text(),
                                    lat: res[0].latitude,
                                    lng: res[0].longitude,
                                    date: $('.date p strong').text() === "" ? "" : new Date(`${$('.date p strong').text().slice(6,10)}-${$('.date p strong').text().slice(3,5)}-${$('.date p strong').text().slice(0,2)}T00:00:00.000Z`),
                                    type: $('.clearfix .w65-t').children().eq(1).text().replace('Domaine d\'action : ',''),
                                    disponibilite: $('.dispo p').text(),
                                    frequence:  $('.freq p').text(),
                                    association: assoc._id
                                })
                                await mission.save( async () => {
                                    await assoc.missions.push(mission._id)
                                    await assoc.save()
                                })
                            })
                            
                        }
                    })
                })
            });
        });
    }
}



exports.update = async () => {
    await association();
    await mission();
}

