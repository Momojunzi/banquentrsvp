const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rsvpSchema = mongoose.Schema({
    locationNumber: {type: String, required: true},
    attending: {type: Boolean, required: true},
    comment: {type: String},
    // guests:[{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Guest'
    // }]
}, {collection: "Rsvp"});

const Rsvp = mongoose.model("Rsvp", rsvpSchema);

module.exports = {
   Rsvp
}