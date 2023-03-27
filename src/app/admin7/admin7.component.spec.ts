import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin7Component } from './admin7.component';

describe('Admin7Component', () => {
  let component: Admin7Component;
  let fixture: ComponentFixture<Admin7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Admin7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
