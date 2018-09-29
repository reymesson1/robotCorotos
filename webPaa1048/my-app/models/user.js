var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
    email: String,
    username: {type: String, unique:true},
    firstname: String,
    lastname: String,
    password: String,
    fullname: String,
    language: String
})

module.exports = mongoose.model('User', userSchema)