const db = require("../models");
const Rsvp = require("../models/model");
const Guest = require("../models/guestsmodel");

module.exports = {
    updateRsvp: function(req, res){
        console.log(req.body.rsvp.comment);
        //console.log(req.body.guests)
        Rsvp.Rsvp
        // .findOne({location: req.body.rsvp.locationNumber})
        //     .then((dbrsvp) => {
        //         console.log(dbrsvp)
        //         res.json(dbrsvp)})
          .findOneAndUpdate({locationNumber: req.body.rsvp['locationNumber']}, {attending: req.body.rsvp.attending, comment: req.body.rsvp.comment})
          .then(dbRsvp => {
              //console.log("dbRsvp: " + dbRsvp);
              Rsvp.Rsvp
                .findOne({locationNumber: req.body.rsvp['locationNumber']})
                .then(result => {
                  //console.log(result);
                  res.json(result);
                })
              
          })
          .catch(err => res.json(err))
    },
    addGuests: function(req, res) {
        Rsvp.Rsvp.findOne({locationNumber: req.body.rsvp['locationNumber']})
            .then(result => {
                const locId = result._id
                console.log(locId);
                const guests = req.body.guests;
                if(req.body.guests.length > 0){
                    console.log(guests);
                    guests.forEach(guest => {
                        const newGuest = new Guest({
                            name: guest,
                            rsvp: locId 
                        });
                        newGuest.save()
                            .then(dbGuest => {
                                console.log(dbGuest);
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