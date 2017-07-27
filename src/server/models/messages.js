var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var msgsSchema = new Schema({
  to: {type: Number, required: true},
  content: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now}
});

module.exports =  mongoose.model('msgs',msgsSchema);
