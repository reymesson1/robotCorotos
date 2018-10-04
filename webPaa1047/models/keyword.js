var mongoose = require('mongoose');

module.exports = mongoose.model('keyword',{    
    name: String,
    order: Number,
    used: Boolean,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})