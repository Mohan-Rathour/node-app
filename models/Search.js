var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SearchSchema = new Schema({
    name: String,
    url: [],
    userName: String,
    created_at : {
        type : Date,
        default: Date.now
    },
    modified_at : {
        type : Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Search', SearchSchema);