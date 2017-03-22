import { Component, OnInit } from '@angular/core';
import { GetaddService } from '../getadd.service';
import { CategoriesPipe } from '../categories.pipe';
@Component({
  moduleId:module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  
  
})
export class HomeComponent implements OnInit {
  //pipes///
  
  catgs:any = ["Scholorship","Food-Supplements","Fashion","Jobs","Cars&Bikes","Furniture","Real-Estate-For-Sale","Pets","Funny-Ads","Electronic","Baby-Kids","Other"];
  advId:any; 


    alladds:any;
  constructor(private Get:GetaddService) {
  this.Get.getalladv().subscribe(ok=>{
    this.alladds=ok.reverse();
    console.log(this.alladds)
  });
   }
  ngOnInit() {
     
  }
  advertId (advId){
    this.advId = advId;
    console.log(this.advId);

  }
}