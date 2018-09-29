var mongoose = require('mongoose');

module.exports = mongoose.model('master',{    
  category: String,
  date: String,
  description: String,
  location: String,    
  nameImage: Array,
  pathImage: Array,  
  place: String,
  title: String,
  fullname: String,
  status: Boolean,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})