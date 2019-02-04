const express = require('express'),
      router = express.Router(),
      axios = require('axios');
      rsvpController = require("../controllers/rsvpController.js");

router.route("/rsvp")
  .post(rsvpController.updateRsvp)

 router.route("/guests")
  .post(rsvpController.addGuests)
  
router.get("/getrsvp")
  .get(rsvpController.getRsvp)

module.exports = router;