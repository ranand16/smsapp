var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cntctSchema = new Schema({
  name: {type: String, required: true},
  phone: {type: Array, required: true},
  email: {type: String, required: true},
  address: {type:String, required: false}
});

module.exports =  mongoose.model('cntct',cntctSchema);
