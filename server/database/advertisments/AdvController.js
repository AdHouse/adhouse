var Adv = require('./AdvModel.js');
var UserC=require('../User/UserController.js')

module.exports = {
  Addserv:function(req,res){
    console.log(req.body)
  	var category=req.body.ad_cat;
  	var location=req.body.ad_loc;
    var desc=req.body.ad_desc;
    var phone=req.body.ad_phone;
    var img=req.body.ad_img;
    var Uid=req.body.ad_uid;
    var approve=0;
    var date=new Date().toUTCString().substr(0,16);
    Adv.create({
      ad_cat:category,
      ad_loc:location,
      ad_desc:desc,
      ad_img:img,
      ad_approve:approve,
      ad_phone:phone,
      ad_uid:Uid,
      ad_date:date
    },function(err,ok){
       if(err){
          res.json(err);
        }       
      else{
        res.json("Your Add has been uploaded waiting for approve")
      }

    })
  },
  // get advs
  getall:function(req,res){
    Adv.find({ad_approve:true},function(err,adds){
      if(err){
        res.json(err)
      }else{
        res.json(adds)
      }

    })
  },
  getAllById:function(req,res){
    console.log(req.params)
    var userId = JSON.parse(req.params.userID);
     Adv.find({ad_uid:userId},function(err,data){
        if (err) {
          throw err
        }
        // console.log(data)
        res.json(data)
       })
  },
 
  /////////admin////////
  Gadmin:function(req,res){
    Adv.find({ad_approve:false},function(err,data){
        if (err) {
          res.json(err)
        }else{

            
            res.json(data)
        }
        
      
       })
    
  },
  /// reject///
    Reject:function(req,res){
      console.log(req.body.id)
       // res.json("Reject")
       Adv.findOne({_id:req.body.id},function(err,ok){
        if(err){throw err}else{
         // console.log(ok.ad_uid)
          var i=ok.ad_uid;
          var desc=ok.ad_desc;
          UserC.SendemailR(i,desc);
          Adv.remove({_id:req.body.id},function(err,ok){
        if(err){
          res.json(err)
        }
        else{
          res.json("deleted succesfully!!")
        }
       })
        }
       })
       

    },

  ///////
  ///approve//
  Approve:function(req,res){
      console.log(req.body.id)
      Adv.findOne({_id:req.body.id},function(err,ok){
        if(err){throw err}
          else{
      UserC.SendemailA(ok.ad_uid,ok.ad_desc,ok.ad_img);
            Adv.update(
        {_id:req.body.id},{ad_approve:1},function(err,ok){
          if(err){
            res.json(err)
          }
          else{
            res.json("approved succeesfully!!")
          }
      })
          }
      })
      // res.json("approve")
      

    },
    getAdv:function (req,res) {
 Adv.find({_id:req.params.advId},function (err,data){
   if (!data.length || data === undefined ) {
     res.json('no data for this adv ')

   }else{
     console.log('Wow , advertisment information retrived ')
     res.json (data)
   }
 })  
}
    

  

 
};
