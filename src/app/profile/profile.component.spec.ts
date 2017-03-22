// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {Observable} from 'rxjs/Rx';

// import { userDataService } from '../userdata.service';
// import { ProfileComponent } from './profile.component';


// let MockuserDataService :any

//  MockuserDataService = {
//    profile: (data) => Observable.of([{
//      email  = email;
//          date = date;
//          username = username;
//          image = image;
//      }]
//    )
//  }
//  spyOn(userDataService, 'profile')
//   .and.returnValue(Observable.of(('Fake Data')))


// describe('ProfileComponent', () => {
//   let component: ProfileComponent;
//   let fixture: ComponentFixture<ProfileComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ProfileComponent ],
//       providers: [
//       {provide: userDataService , useValue: MockuserDataService }]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ProfileComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
