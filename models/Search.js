var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SearchSchema = new Schema({
    name: String,
    url: String,
    userName: String
});
module.exports = mongoose.model('Search', SearchSchema);