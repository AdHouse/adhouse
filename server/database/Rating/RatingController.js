var Rating = require ('./RatingModel.js');
module.exports = {
	insert : function (req, res) {
		Rating.findOne({advertismentId:req.body.advertismentId})
			.exec(function (error, user) {
				var newRating = new Rating ({
		        	postedBy:req.body.postedBy,
		        	advertismentId : req.body.advertismentId,
				});
			newRating.value.push(req.body.value);
			newRating.save(function(err, newRating){
	    		if(err){
	       		 	res.status(500).send(err);
	    		}else{
	    			console.log('Rating Done');
	    			res.json(newRating)
	    		};
			});
		})
	},
	getAllRatingsByADID : function (req, res) {
		Rating.find({advertismentId:req.params.id}).exec(function (err, allRating) {
			if(err){
				res.status(500).send('err');
			}else{
				console.log('done')
				res.status(200).send(allRating);
			}
		});
	}
}