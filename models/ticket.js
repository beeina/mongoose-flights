const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketchema = new Schema({
    seat: {
      type: String,
      match: /[A-F][1-9]\d?/,
    },
    price: {
      type: Number,
      min: 0,
    }, 
  });