import { async, ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx'

import { Http } from '@angular/http';
import { AdminComponent } from './admin.component';
import {AdminService} from '../admin.service';

 let MockAdminService :any

 MockAdminService = {
   get: () => Observable.of([{
     ad_approve:true
    
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

  it('should do math', () => {
    expect (1+1).toEqual(2);
  })

  it('should set the Add property when initialized', () => {
    component.ngOnInit();
    expect(get).toEqual(true)
  })
});
