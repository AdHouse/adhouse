import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable'
import { Http } from '@angular/http';

import { AppModule } from '../app.module'
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GetaddService } from '../getadd.service';
import { CategoriesPipe } from '../categories.pipe';



 // let MockGetaddService :any

 // MockGetaddService = {
 //   getalladv: () => Observable.of([{
 //     ad_cat:String,
 //    ad_loc:String,
 //    ad_desc:String,
 //    ad_img:String,
 //    ad_date:String,
 //    ad_approve:Boolean,
 //    ad_phone:String,
 //    ad_uid: String
 //     }]
 //   )
 // }



describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ GetaddService,
      
      {provide: Http , useValue: GetaddService },
      CategoriesPipe  
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should do math', () => {
    expect (1+1).toEqual(2);
  })

  it('should correctly render ad date' , () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('')

    component.catgs = ["careers","cars","furniture","electronic","Other"];
    fixture.detectChanges()
    fixture.whenStable().then(() => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe('"careers","cars","furniture","electronic","Other"')
  })
  }
  
});
