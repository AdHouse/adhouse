var mongoose= require ("mongoose"); 

var RatingSchema = new mongoose.Schema({
	
	value:{
		type     : Array, 
		required : false,

	},

	postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    advertismentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'adv'
    }
}); 

var Rating = mongoose.model('Rating', RatingSchema)
module.exports = Rating ;