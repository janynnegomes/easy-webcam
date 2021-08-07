import { TestBed } from '@angular/core/testing';

import { NgxEasyWebcamService } from './ngx-easy-webcam.service';

describe('NgxEasyWebcamService', () => {
  let service: NgxEasyWebcamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxEasyWebcamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
