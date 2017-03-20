var mongo = require('mongoose')

var Api= new mongo.Schema({
   Ap_username:String,
   Ap_password:String,
   Ap_email:String,
   Ap_key:String, 


})
var api = mongo.model('Api',Api)
module.exports=api