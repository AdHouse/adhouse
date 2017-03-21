import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class userDataService {

  constructor(private http:Http) { }
  
  // Profile services : - 

  profile(id){
  	return this.http.get('/api/getUser/'+id).map(res=>res.json())
  }	
  getAdv(id){
  	return this.http.get('/api/adds/'+id).map(res=>res.json())
  }
  changeImage(data){
  	return this.http.put('/api/changImage',data).map(res=>res.json())
  }

  Remove(id){
     return this.http.post('/api/adds/reject',{id:id}).map(res=>res.json());
  }

  getAdvInfo (id){
    return this.http.get ('/api/addserv/'+id).map(res=>res.json());
  }

  // Comments services :- 
  
  InsertCom (data){
    return this.http.post('/api/insertComment',data).map(res=>res.json());
  }

  getCommById (advId){
    return this.http.get('/api/getCommentsById/'+advId).map(res=>res.json());
  }

  editComm (data){
    return this.http.put('/api/editComment',data).map(res=>res.json());
  }

  delComm (comId){
    return this.http.delete('/api/removeCommentById/delete/'+comId).map(res=>res.json());
  }
  // Rating services :- 

  insertRate (data){
    return this.http.post ('/api/insertR',data).map (res => res.json());
  }
  
  getAllRatingByAdID (id){
    return this.http.get ('/api/allR/'+id).map (res => res.json());
  }

}
