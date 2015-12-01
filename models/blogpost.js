var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogpostSchema = new Schema({
  title: String
  ,author: String
  ,blurb: String
  ,smallPhoto: String
  ,bigPhoto: String
  ,content: String
})

module.exports = mongoose.model('Blogpost', blogpostSchema)
