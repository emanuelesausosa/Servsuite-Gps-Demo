import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsLiveComponent } from './gps-live.component';

describe('GpsLiveComponent', () => {
  let component: GpsLiveComponent;
  let fixture: ComponentFixture<GpsLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpsLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
