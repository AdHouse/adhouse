var utils=require('../../config/utils.js');
var jwt = require('jwt-simple');
var User = require('./UserModel.js');
var nodemailer = require('nodemailer');

module.exports = {
  signin: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        
        if(data.length===0){
          res.json("username wrong")
        }
        else{
          utils.comparePass(password,data[0].password,function(ok){
            if(ok){
              var token=jwt.encode(data[0],'user');
              res.json({token:token, id:data[0]._id,Admin:data[0].Admin})
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

    var username = req.body.username;
    var password = req.body.password;
    var email=req.body.email;
    var image ='http://www.careerpilot.org.uk/images/profile-icon-lrg.png';
    var admin=false;
    var date=new Date().toUTCString().substr(0,16);
     utils.hashpass(password,function(hash){
             password=hash});
   
     User.find({username:username},function(err,data){
      if(err){
        res.json(err)
      }
      else{
        if(data.length===0){
            User.find({email:email},function(err,data){
              if(err){
                res.json(err)
              }
              else{
                if(data.length===0){
                  User.create({username:username,password:password,email:email,image:image,Admin:admin,date:date},function(err,data){
            if(err){
              res.json(err)
            }
            else{
              var ok="ok"
              res.json({ok:ok})
            }
          })
                }
                else{
                  res.json("email already exist")
                }
              }
            })
        }else{
          res.json("user already exist")
        }
      }
     })
    // check to see if user already exists
   
  },
  getUser :function (req,res) {
    //console.log(req.params)
    var userId = JSON.parse(req.params._id);
     User.findOne({_id:userId},function(err,data){
      if (err) {
        throw err
      }
      //console.log(data)
      res.json(data)
     })
  },
  changImage: function (req,res) {
     console.log(req.body)
    if (req.body.image === undefined || req.body.image === null) {
    var image ='http://www.careerpilot.org.uk/images/profile-icon-lrg.png';
    }
    else {
      var image = req.body.image ;
    }
        User.update(
        {_id:req.body._id},{image:image},function(err,ok){
          if(err){
            res.json(err)
          }
          else{
            res.json("changed image  succeesfully!!")
          }
      })
  },

  //// handle email///
  SendemailR:function(id,desc){
     // console.log("hi++++++++"+id)
     
      User.findOne({_id:id},function(err,data){
        if(err){
          throw err
        }
        else{
          // console.log(data)
          var email=data.email
          var username=data.username
          //// send email///
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
text:"Hello :"+" "+username+" your ad "+" "+desc+" "+"was rejected!!"
//html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

transporter.sendMail(mailOptions, function(error, info){
  if(error){
  console.log(error);
  }else{
  console.log('Message sent: ' + info.response);
      };
      });
        }
      })
  },
  SendemailA:function(id,desc){
     User.findOne({_id:id},function(err,data){
        if(err){
          throw err
        }
        else{
          console.log(data)
          var email=data.email
          var username=data.username
          //// send email///
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
text:"Hello :"+" "+username+" your ad "+" "+desc+" "+"was Approved!!"
//html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        };
  });
        }
      })
  }

  ////////////////////
};


              


 