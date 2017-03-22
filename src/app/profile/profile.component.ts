import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { userDataService } from '../userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
date:any;
email:any;
username:any;
image1:string;
image:string;
userAdv : any;
id:any;
message:any;
Adds:any;
count:any;
aproved: number = 0;
notAproved: number = 0;
  constructor(private user:userDataService , private changeDetectorRef: ChangeDetectorRef) { 

  	this.id =localStorage.getItem('id');
  		this.user.profile(this.id).subscribe( 
  			 ok=>{
  			 this.email	= ok.email;
         this.date = ok.date;
         this.username = ok.username;
         this.image = ok.image;
         
			  	})
      this.user.getAdv(this.id).subscribe( adv => {
        console.log(this.id)
        this.userAdv = adv.reverse();
        this.count = adv.length;
        for (var i = 0; i < adv.length; i++) {
          if (adv[i].ad_approve == true) {
            console.log(adv[i].ad_approve)
            this.aproved = this.aproved + 1;
          }else{
            this.notAproved +=1 ;
          }
        }
      })


  }
  
  ngOnInit() {
  }
  fileChange(input){
    this.readFiles(input.files);

  }
  readFile(file, reader, callback){
  // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }
    
  // Read the file
    reader.readAsDataURL(file);
  }
  readFiles(files){
    // Create the file reader
    let reader = new FileReader();
    
    // If there is a file
    if (files[0]){
      // Start reading this file
      this.readFile(files[0], reader, (result) =>{
        // Create an img element and add the image file data to it
      this.image1=result;
        
       
       
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  changeImage(){
        
        var newIm = {
    _id:JSON.parse(this.id),
    image:this.image1
        }
        this.user.changeImage(newIm).subscribe(ok=>{console.log(ok);
          this.message="Your image has been uploaded";
          this.id =localStorage.getItem('id');
          this.user.profile(this.id).subscribe( 
         ok=>{
         this.email = ok.email;
         this.date = ok.date;
         this.username = ok.username;
         this.image = ok.image;
         
          })          
        });
    }
    Reject(id){
      console.log(id);
      this.user.Remove(id).subscribe(ok=>{
          console.log(ok)
          for(var i=0 ; i<this.userAdv.length; i++){
            if(this.userAdv[i]._id === id){
              this.userAdv.splice(i,1)
              console.log('deleted successfuly yeaaa')
            }
          }
          this.user.getAdv(this.id).subscribe( adv => {
            console.log(this.id)
            this.userAdv = adv ;
            this.count = adv.length;
            this.aproved = 0;
            this.notAproved = 0;
            for (var i = 0; i < adv.length; i++) {
              if (adv[i].ad_approve == true) {
                console.log(adv[i].ad_approve)
                this.aproved = this.aproved + 1;
              }else{
                this.notAproved +=1 ;
            }
          }
        })
      })
    }
 }
