const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  username: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
  header: { type: String, required: true },
  message: { type: String, required: true },
});

const FeedsModel = mongoose.model('feeds', FeedSchema);

module.exports = FeedsModel;