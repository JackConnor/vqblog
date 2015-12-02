var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
  content: String
  ,author: String
  ,blogpost: Array
})

module.exports = mongoose.model('Comment', commentSchema)
