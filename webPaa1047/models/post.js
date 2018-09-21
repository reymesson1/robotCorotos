var mongoose = require('mongoose');

module.exports = mongoose.model('post',{    
    code: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})