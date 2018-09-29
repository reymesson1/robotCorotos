var mongoose = require('mongoose');

module.exports = mongoose.model('field',{    
    position: String,
    date: String,
    description: String,
    value: String,    
    category: String,
    field: String   
})