const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');
const config = require('./config/dbconfig');
const routes = require('./routes/routes.js');


const app = express();
const PORT = process.env.PORT || 3001

app.use(express.static('../client/public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build/")));
}

mongoose.Promise = global.Promise;

mongoose.connect(config.db, { useNewUrlParser: true , dbName:'rsvp'})
  .then(result => {
    console.log("db connected")
    
  }).catch(err => {
    console.log(err);
  });

app.use('/api', routes);

app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname, "../client/build/index.html"));
   });

app.listen(PORT, ()=>{
  console.log(`Backend is really listening on port: ${PORT}`);
});