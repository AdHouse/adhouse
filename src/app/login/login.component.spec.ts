// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router, ActivatedRoute } from '@angular/router';

// import { RouterTestingModule } from '@angular/router/testing';
// import { Observable } from 'rxjs/Observable'

// import { AuthService } from '../auth.service';
// import { LoginComponent } from './login.component';

// class MockLoginComponent {
  
// }

// class MockModule { }


//  let MockAuthService :any

//  MockAuthService = {
//    signin: (user) => Observable.of([{
//         username: user.username,
//         password: user.password
//     }]
//    )
//  }

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent],
//       providers: [ 
//       {provide: AuthService , useValue: MockAuthService }],
//       imports: [
//         RouterTestingModule
//           ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

  
// });
