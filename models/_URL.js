var mongoose = require('mongoose');

var url = mongoose.Schema({
    link: String,
    time: Number
});
module.exports = mongoose.model('url',url);