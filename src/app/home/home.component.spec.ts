// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Observable } from 'rxjs/Observable'
// import { Http } from '@angular/http';
// import { Pipe, PipeTransform } from '@angular/core';
// import { RouterTestingModule } from '@angular/router/testing';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import 'rxjs/Rx'

// import { AppModule } from '../app.module'
// import { HomeComponent } from './home.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { GetaddService } from '../getadd.service';
// import { SignupComponent } from '../signup/signup.component';
// import { AppComponent } from '../app.component';

// // import { CategoriesPipe } from '../categories.pipe';

// @Pipe({
//   name: 'filter'
// })

// class CategoriesPipe implements PipeTransform {


//      transform(alladds: any, term?: any): any {

   

//    if(term=== undefined) return alladds;
//    return alladds.filter(function(adv){
//        return adv.ad_cat.toLowerCase().includes(term.toLowerCase());
//    })
//  }

// }

// let MockCategoriesPipe : any

// MockCategoriesPipe = {

// }

//  let MockGetaddService :any

//  MockGetaddService = {
//    getalladv: () => Observable.of([{
//   	ad_cat:String,
//     ad_loc:String,
//     ad_desc:String,
//     ad_img:String,
//     ad_date:String,
//     ad_approve:Boolean,
//     ad_phone:String,
//     ad_uid: String
//      }]
//    )
//  }



// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent , SignupComponent, AppComponent],
//       providers: [ GetaddService, 
//       {provide: GetaddService , useValue: MockGetaddService },
//       {provide: CategoriesPipe , useValue: CategoriesPipe }
//       ],
//       imports: [ RouterTestingModule , BrowserModule, FormsModule ],
//       schemas : [NO_ERRORS_SCHEMA]

//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
  
//   it('should do math', () => {
//     expect (1+1).toEqual(2);
//   })

//   it('should correctly render ad date' , () => {
//     expect(fixture.debugElement.nativeElement.innerHTML).toBe('')

//     component.catgs = ["careers","cars","furniture","electronic","Other"];
//     fixture.detectChanges()
//     fixture.whenStable().then(() => {
//     expect(fixture.debugElement.nativeElement.innerHTML).toBe('"careers","cars","furniture","electronic","Other"')
//   })
//   });
