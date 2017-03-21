var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
		username:String,
		userId:{type: mongoose.Schema.Types.ObjectId,
       	   ref: 'users'},
       	   userImage:String,
         advId:{type: mongoose.Schema.Types.ObjectId,
           ref: 'adverts'},
         text:String,
         date:String
});
module.exports = mongoose.model('Comment', CommentSchema);
