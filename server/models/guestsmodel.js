const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = mongoose.Schema({
    name: String, 
    rsvp: { 
        type: Schema.Types.ObjectId, 
        ref: 'Rsvp' 
    }
}, {collection: "Guest"});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;