var mongoose = require('mongoose');
var namesSchema = new mongoose.Schema({
  name: String 
});

module.exports = mongoose.model('testCollection', namesSchema);