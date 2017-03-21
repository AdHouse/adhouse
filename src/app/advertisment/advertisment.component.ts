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
  advdata:any;
  comments:any;
  comId:any;
  private url;
  id :any;
  com:any;
  toggle:any = false;
  text:any;
  userId:any;
  inserted:any;
  deletedDone:any;
  dump :any;
  AvgRating:any;
 constructor(private user:userDataService , private route:ActivatedRoute) {
		this.url = this.route.params.subscribe( params=> {
			this.id = params['id'];
		})
  		this.user.getAdvInfo(this.id).subscribe( 
 			ok=>{
    			 	this.advdata = ok;
		  	})
  	  		this.user.getCommById(this.id).subscribe(data =>{
  	  			this.comments = data ;
  	  			this.comId = data[0]._id;
  	  			console.log(data)
  	  		})
   }
  commentAuth(id){
  	this.userId =localStorage.getItem('id');
  	this.userId =JSON.parse(this.userId);
   	return ( id == this.userId ) 
   }
  editComment(x){
  	this.comId = x;
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
    })
    this.refreshCom()
   


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
	     this.comments = data ;
	     console.log(data)
	   })
  }
  insertRateAdv(advId,value){
    this.dump = '';
    this.userId =localStorage.getItem('id');
    this.userId =JSON.parse(this.userId);
    let rate ={
      value:value,
      postedBy:this.userId,
      advertismentId:advId 
    }
    this.user.insertRate(rate).subscribe( Done =>{
      this.dump = Done ;
    })
  }
  retriveRating(advId){
    this.user.getAllRatingByAdID(advId).subscribe( Done =>{
        this.AvgRating = Done ;
    })
    this.refreshRating(advId)
  }
  refreshRating(advId){
    this.user.getAllRatingByAdID(advId).subscribe( Done =>{
        this.AvgRating = Done ;
    })
  }
  ngOnInit() {


  }
    ngOnChanges() {
      this.refreshCom();
  }
}
