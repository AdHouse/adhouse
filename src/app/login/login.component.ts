import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

constructor(private Auth:AuthService) {}
   

  ngOnInit() {
  }
    message:string;
  	username:string;
  	password:string;

  	login(){
  		var user={
  			username:this.username,
  			password:this.password
  		}
  		this.Auth.signin(user).subscribe(ok=>{
  			if(typeof(ok)!=="string"){
  				localStorage.setItem('com.addhouse',JSON.stringify(ok.token));

  			  localStorage.setItem('id',JSON.stringify(ok.id));
          localStorage.setItem('UserType',JSON.stringify(ok.Admin));
          //console.log(localStorage.getItem('UserType'));
         
        window.location.href=("/#Profile")
  			this.message=ok.id
  		}else{
  			this.message=ok;
  		}
  			
  		}
  			
  		);

	      
	     
  	}
    
    
}



