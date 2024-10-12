const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  title: String, 
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  votes: {
      type: Number,
      default: 0
    }  
 
});

module.exports = mongoose.model('feeds', feedSchema);
