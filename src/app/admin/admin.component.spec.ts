import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

import { Http } from '@angular/http';
import { AdminComponent } from './admin.component';
import {AdminService} from '../admin.service';

 let MockAdminService :any

 MockAdminService = {
   get: () => Observable.of([{
     ad_cat:String,
    ad_loc:String,
    ad_desc:String,
    ad_img:String,
    ad_date:String,
    ad_approve:Boolean,
    ad_phone:String,
    ad_uid: String
     }]
   )
 }
// let MockAdminService = jasmine.createSpyObj('AdminService', ['get'])
// MockAdminService.get.and.returnValue(Observable.of('FakeData'))

// spyOn(AdminService, 'get')
//   .and.returnValue(Observable.of(('Fake Data')))

// class MockAdminService extends AdminService {
//   get(Adds) {
//     return Adds
//   }
// }


describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent],
      providers: [ 
      {provide: AdminService , useValue: MockAdminService }]
      // schemas : [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
