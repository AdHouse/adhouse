import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(private http:Http) { 

  }

  signup(data){
  console.log(data);
        return this.http.post('/api/signup',data);
    };
  
}
