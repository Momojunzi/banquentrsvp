const db = require("../models");
const Rsvp = require("../models/model");
const Guest = require("../models/guestsmodel");

module.exports = {
    updateRsvp: function(req, res){
        Rsvp.Rsvp
          .findOneAndUpdate({locationNumber: req.body.rsvp['locationNumber']}, {attending: req.body.rsvp.attending, comment: req.body.rsvp.comment, $push:{noShows: req.body.rsvp.noShows}})
          .then(dbRsvp => {
              //console.log("dbRsvp: " + dbRsvp);
              Rsvp.Rsvp
                .findOne({locationNumber: req.body.rsvp['locationNumber']})
                .then(result => {
                  res.json(result);
                })
              
          })
          .catch(err => res.json(err))
    },
    addGuests: function(req, res) {
        Rsvp.Rsvp.findOne({locationNumber: req.body.rsvp['locationNumber']})
            .then(result => {
                const locId = result._id
                const guests = req.body.guests;
                if(req.body.guests.length > 0){
                    guests.forEach(guest => {
                        const newGuest = new Guest({
                            name: guest,
                            rsvp: locId 
                        });
                        newGuest.save()
                            .then(dbGuest => {
                                res.json('ddd')
                            })
                    })
                }
                else console.log('no guests');
            })   
    },
    getRsvp: function(req, res) {
        Guest.Guest
          .find()
          .then(dbRsvp => {
              console.log(dbrsvp);
              res.json(dbRsvp);
          })
    }
    
}