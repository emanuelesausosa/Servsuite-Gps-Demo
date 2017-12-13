import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverBehaviorComponent } from './driver-behavior.component';

describe('DriverBehaviorComponent', () => {
  let component: DriverBehaviorComponent;
  let fixture: ComponentFixture<DriverBehaviorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverBehaviorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
