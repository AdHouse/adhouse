import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.css']
})
export class ApisComponent implements OnInit {
	message:string;
  	email:string;
  	password:string;
  	showReg:boolean=false;
  	key:string;
  	username:string;
  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }
  ///
  login(){
  	this.key=""
  		var user={
  			email:this.email,
  			password:this.password
  		}
  		this.Auth.signinApi(user).subscribe(ok=>{
  			if(typeof(ok)!=="string"){
         console.log(typeof(ok.key))
        
  			this.key=ok.key
  		}else{
  			this.message=ok;
  		}
  			
  		})
  	}
  	///
  	ShowUp(){
  		this.showReg=true
  		this.message=""

  	}
//   	ShowDo(){
// return this.showReg=true
//   	}
  	//
  	signupApi(){
  		this.message="";
	var user={
  			username:this.username,
  			password:this.password,
  			email:this.email
  		}
  		this.Auth.signupApi(user).subscribe(ok=>{
  			console.log(ok)
  			if(typeof(ok)=="string"){
             this.showReg=false;
  			}else{
  				this.message=ok.er
  			}
  			
  		})
  	}
  	ShowD(){
  		this.showReg=false
  	}

}
