import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasyWebcamComponent } from './ngx-easy-webcam.component';

describe('NgxEasyWebcamComponent', () => {
  let component: NgxEasyWebcamComponent;
  let fixture: ComponentFixture<NgxEasyWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxEasyWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEasyWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
