var Comment = require('./CommentModel.js');
var User = require ('../User/UserModel.js');
module.exports = {
	insertComment : function (req,res) {
	    var username ='';
		    var date=new Date().toUTCString().substr(0,26);
		User.find({_id:req.body.userId},function(err,data){
			if (!err) {
				this.username = data[0].username;
				console.log(this.username)
				
			}
		}).then(function(data){
		var userId = req.body.userId ;
		var advId = req.body.advId ;
		var text = req.body.text ;
		 Comment.create ({
		 	username:this.username,
			userId :userId ,
			advId :advId ,
			text :text ,
			date:date
		},function (err,data) {
			if (err) {
				throw err ;
			}
			else{
				console.log("insert successfuly");
				res.json(data);
			}
		})

		})
	},
	getCommentsById : function (req , res) {
		console.log(req.params)
		 Comment.find({advId:req.params.advId},function(err,data){
   		   if(err){
        	res.json(err)
      	   }else{
      	   	console.log('retrived successfuly !')
        	res.json(data)
      	   }
    	})
	},
	editComment: function (req,res) {
	   Comment.update({_id:req.body._id},{text:req.body.text},function(err,data){
      		if(err){
        		res.json(err)
      		}
      		else{
      			console.log('edit successfuly !')
        		res.json(data)
      		}
  	  })
	},
	removeCommentById: function (req,res) {
		console.log(req.params)
       Comment.remove({_id:req.params._id},function(err,data){
          if(err){
           res.json(err)
          }
          else{
          	console.log('done !!!')
            res.json(data)
          }
       })
	} 
}