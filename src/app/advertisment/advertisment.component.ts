import { Component, OnInit } from '@angular/core';
import { userDataService } from '../userdata.service';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent implements OnInit {

  // property we used it in advertisment componenet 

  advdata:any;
  comments:any;
  comId:any;
  private url;
  id :any;
  com:any;
  val:any;
  toggle:any = false;
  text:any;
  userId:any;
  inserted:any;
  deletedDone:any;
  dump :any;
  AvgRating:any;

   //  constructor 

 constructor(private user:userDataService , private route:ActivatedRoute) {

  // retrive the information for the advertisment
		  this.url = this.route.params.subscribe( params=> {
			   this.id = params['id'];
         console.log(this.id);
		})
  		this.user.getAdvInfo(this.id).subscribe( ok=>{
    			 	this.advdata = ok;
      })
   }

  // ******** Comment functions ********* 
   
  commentAuth(id){
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	return ( id == this.userId ) 
   }

  editComment(id){
  	this.comId = id;
   	this.toggle = !this.toggle ;
   }

  anotherSubmit(){
   	let updateCom = {
   		_id:this.comId,
   		text:this.text
   	}
   	this.user.editComm(updateCom).subscribe(Done =>{
   		this.dump = Done ;
   	})
    this.com ='';
    this.text ='';
    this.refreshCom();
   }
  
  insertComment(){
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	let newCom = {
   		userId:this.userId,
   		advId:this.id,
   		text:this.com
   	}
   	this.user.InsertCom(newCom).subscribe(Done => {
   		this.inserted = Done ;
      this.com ='';
      this.refreshCom();
    })
  }
  
  deleteComment(id){
   	this.user.delComm(id).subscribe(deleted =>{
   		this.deletedDone = deleted;
   		console.log(this.deletedDone);
   	})
   this.refreshCom();
   }
  
  isAuth(){
   	this.toggle = !this.toggle;
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	return typeof(this.userId) === 'string'; 
   }
  
  refreshCom(){
	   this.user.getCommById(this.id).subscribe(data =>{
	     this.comments = data.reverse() ;
	     // console.log(data)
	   })
  }

  //  ******** rating functions ********* 
  
  insertRateAdv(advId,value){
    console.log(advId,value)
    this.dump = '';
    this.userId =localStorage.getItem('id');
    this.userId =JSON.parse(this.userId);
    let rate ={
      value:Number(value),
      postedBy:this.userId,
      advertismentId:advId 
    }
    this.user.insertRate(rate).subscribe( Done =>{
      this.dump = Done ;
    })
    this.val = 0;
    this.retriveRating();
  }

  retriveRating(){
    console.log(this.id);
    this.user.getAllRatingByAdID(this.id).subscribe( Done =>{
        this.AvgRating= Done ;
    })
    console.log(this.AvgRating);
  }

  refreshRating(){
          this.user.getAllRatingByAdID(this.id).subscribe( data =>{
              if (typeof(data) === 'string') {
              this.AvgRating =  0 ;
              }
              else{
                this.AvgRating = data ;
                console.log(data);
             }
        })
  }

  ngOnInit() {

        // retrive all comment(s) for this advertisment order by most recent  .
          this.user.getCommById(this.id).subscribe( data =>{
              this.comments = data.reverse() ;
              this.comId = data[0]._id;
              console.log(data)
      })
          // retrive the average rating for this advertisment 
          this.user.getAllRatingByAdID(this.id).subscribe( data =>{
              if (typeof(data) === 'string') {
              this.AvgRating =  0 ;
              }
              else{
                  this.AvgRating = Math.floor(data) ;
                  console.log(data);
              }
         })
  }
  ngOnChanges() {
      this.refreshCom();
      this.retriveRating();
  }
}

