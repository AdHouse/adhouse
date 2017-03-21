// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { AuthService } from '../auth.service';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';

// import { SignupComponent } from './signup.component';

// let MockAuthService :any

//  MockAuthService = {
//    signup: () => Observable.of([{
//       username:String,
//      password: String,
//      email: String
//      }]
//    )
//  }

// describe('SignupComponent', () => {
//   let component: SignupComponent;
//   let fixture: ComponentFixture<SignupComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SignupComponent ],
//       providers: [ 
//       {provide: AuthService , useValue: MockAuthService }]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SignupComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
