import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactService {

  constructor(private http:Http) { }

  sendemail(data){
  	
  	return this.http.post('/api/helpdesk/support',data).map(res=>res.json())
  }
}
