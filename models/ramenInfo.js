const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema

const ramenInfoSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  mrt:[{
    type: String,
    required: true
  }],
  website:{
    type: String,
    required: true
  },
  tag:[{
     type: String,
     required: true
  }],
  soupRating:{
    type: Number,
    required: true
  },
  noodleRating:{
    type: Number,
    required: true
  },
  meatRating:{
    type: Number,
    required: true
  },
  imageURL:{
    type: String,
    required: true
  }
});

module.exports = RamenInfo = mongoose.model('rameninfo', ramenInfoSchema);