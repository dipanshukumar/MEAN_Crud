var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
       name : { type : String },
       address : { type : String },
       contact : { type : String },
       email : { type: String },
});

module.exports = mongoose.model('user', userSchema);