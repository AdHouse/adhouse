var Api=require('./ApiUserModel.js');
var utils=require('../../config/utils.js');
var nodemailer = require('nodemailer');
var hat = require('hat');
var Adv=require('../advertisments/AdvModel.js')

module.exports = {
  signin: function (req, res) {
  	console.log(req.body)
    var email = req.body.email;
    var password = req.body.password;
    Api.find({Ap_email:email},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        
        if(data.length===0){
          res.json("Email wrong")
        }
        else{
          utils.comparePass(password,data[0].Ap_password,function(ok){
            if(ok){
              
              res.json({"key":data[0].Ap_key})
            }
            else{
              res.json("password wrong")
            }
          })
        
        }
      }
    })
  },
  signup: function (req, res) {
  	console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    var email=req.body.email;
    var key=hat();
     utils.hashpass(password,function(hash){
             password=hash});
   

     Api.find({Ap_username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        if(data.length===0){
            Api.find({Ap_email:email},function(err,data){
              if(err){
                res.json(err)
              }
              else{
                if(data.length===0){
                	//// check if email correct or not 
          var transporter = nodemailer.createTransport({
   		 service: 'gmail',
  			  auth: {
    			 user: 'adhouse2017@gmail.com', // Your email id
   			 pass: 'AA12341234aa' // Your password
  			}
  			});
           var mailOptions = {
			from: 'adhouse2017@gmail.com', // sender address
			to: email, // list of receivers
			subject: 'Addhouse system adds', // Subject line
			text:"Hello  "+" "+username+"Your Account  Has Been Created!! And your key is "+key
			  };
			  transporter.sendMail(mailOptions, function(error, info){
			  if(error){
			  res.json(error)
			  }else{

  		      Api.create({Ap_username:username,Ap_password:password,Ap_email:email,Ap_key:key},function(err,data){
            if(err){
              res.json(err)
            }
            else{
              
              res.json("add sucsses full");
            }
          })
     		 };
      		});
                }
                else{
                  res.json({"er":"email already exist"})
                }
              }
            })
        }else{
          res.json({"er":" username already exist!!"})
        }
      }
     })
    
   
  },
UserApiData:function(req,res){
 
	Api.find({Ap_key:req.params.apikey},function(err,data){
		if(err){
			res.json(err)
		}
		else{
			if(data.length===0){
				res.status(404)
				res.json("you are not authorized")
			}else{
				
				Adv.find({ad_approve:true},function(err,adds){
     		 if(err){
      		throw err
      		}else{
       		  var result=[];
       		 for(var i=0;i<adds.length;i++){
       		 	result.push({"category":adds[i].ad_cat,"location":adds[i].ad_loc,"image":adds[i].ad_img,"date":adds[i].ad_date,"description":adds[i].ad_desc})
       		 	
       		 }
				console.log(result)
       		res.json(result) 
      			}
   		 })
			}
		}
	})
}
};
