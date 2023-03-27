import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin6Component } from './admin6.component';

describe('Admin6Component', () => {
  let component: Admin6Component;
  let fixture: ComponentFixture<Admin6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
