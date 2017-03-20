// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable'
// import { ActivatedRoute } from '@angular/router';

// import { FormsModule } from '@angular/forms';
// import { HomeComponent } from '../home/home.component';
// import { AdvertismentComponent } from './advertisment.component';
// import { GetaddService } from '../getadd.service';
// import { userDataService } from '../userdata.service';


// let MockGetaddService :any

// MockGetaddService = {
//    getalladv: () => Observable.of([{
//      ad_cat:String,
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

// let MockUserDataService :any

// MockUserDataService = {
//    getAdvInfo: (id) => Observable.of([{
//      ad_cat:String,
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



// describe('AdvertismentComponent', () => {
//   let component: AdvertismentComponent;
//   let fixture: ComponentFixture<AdvertismentComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AdvertismentComponent ],
//       providers: [ HomeComponent,  ActivatedRoute ,
//       {provide: GetaddService , useValue: MockGetaddService },
//       {provide: userDataService , useValue: MockUserDataService }],
//       imports : [FormsModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AdvertismentComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
