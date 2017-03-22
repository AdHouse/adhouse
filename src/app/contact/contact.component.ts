import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	 name:string;
	 email:string;
	 message: string;
	 

  constructor(private contact:ContactService) {

  	}


  ngOnInit() {

  	
  }

  sendMsg(){
  	let newMsg = {
  		name: this.name,
  		email:this.email,
  		message: this.message
  	}

  	this.contact.sendemail(newMsg).subscribe(ok=>{
      console.log(ok)
    })
  	
  }
   

}
