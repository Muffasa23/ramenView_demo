const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const ramenStore = require('./routes/api/ramenStore');

const app = express();

// body-parser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err)); 

//use routes
app.use('/api/ramenStore', ramenStore);

// postbuild script
// Serve static assets if in production
if(process.env.NODE_ENV === "production"){
  //Set Static folder
  app.use(express.static('client/build'))

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`Server started on ${port}`));