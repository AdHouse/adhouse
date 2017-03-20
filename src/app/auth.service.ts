import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthService {

  constructor(private http:Http) { 

  }

  signup(data){
  // console.log(data);
        return this.http.post('/api/signup',data).map(resp=>{return resp.json()});
    }

  signin(data){
  return this.http.post('/api/signin',data).map(resp=>{return resp.json()})
    }
    /// api login
  signinApi(data){
  	return this.http.post('/api/Apis/login',data).map(resp=>{return resp.json()})
  }
  /// api signup
  signupApi(data){
  	return this.http.post('/api/Apis/signup',data).map(resp=>{return resp.json()})
  }
}
