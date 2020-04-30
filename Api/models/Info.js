const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Info = new Schema({
  Name: {
    type: String
  },
  Email: {
    type: String
  },
  Phone: {
    type: String
  },
  Time: {
    type: String
  },
  Message: {
    type: String
  },

},{
    collection: 'Info'
});

module.exports = mongoose.model('Info', Info);