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
  toggle:any = false;
  text:any;
  userId:any;
  inserted:any;
  deletedDone:any;
  dump :any;
  AvgRating:any;
  resultRate:any;

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
      this.refreshCom()
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

  retriveRating(){
    console.log(this.id);
    this.user.getAllRatingByAdID(this.id).subscribe( Done =>{
        this.resultRate= Done ;
    })
    let sum = 0 ;
    for (let i = 0; i < this.resultRate.length; i++) {
      console.log(this.resultRate[i]);
      sum += this.resultRate[i].value;
      console.log(sum) 
    }
    console.log(sum);
    this.AvgRating = ( sum / this.resultRate.length ) || 0 ;
  }

  refreshRating(){
    this.user.getAllRatingByAdID(this.id).subscribe( Done =>{
        this.AvgRating = Done ;
    })

  }

  ngOnInit() {

        // retrive all comment(s) for this advertisment order by most recent  .
          this.user.getCommById(this.id).subscribe( data =>{
              this.comments = data.reverse() ;
              this.comId = data[0]._id;
              console.log(data)
      })

  }

  ngOnChanges() {
      this.refreshCom();
      this.retriveRating();
  }
}
