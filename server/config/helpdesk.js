var nodemailer = require('nodemailer');


module.exports = {

	sendEmail: function (req,res){
		
			var name = req.body.name;
			var email = req.body.email;
			var message = req.body.message

			res.json(req.body)
		   var transporter = nodemailer.createTransport({
   		 service: 'gmail',
  			  auth: {
    			 user: 'adhouse2017@gmail.com', // Your email id
   			 pass: 'AA12341234aa' // Your password
  			}
  			});
           var mailOptions = {
			from: 'adhouse2017@gmail.com', // sender address
			to: 'helpdesk.adhouse@gmail.com', // list of receivers
			subject: 'Ad Helpdesk', // Subject line
			text:"Hello,  "+ name  + " " + email + " needs your attention with the following message:" + message
			  };
			  transporter.sendMail(mailOptions, function(error, info){
			  if(error){
			  res.json(error)
			  }else{	
			  	res.json('Your email was recieved')

  		 
     		 };
      		});
	 }
};