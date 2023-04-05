import { TestBed } from '@angular/core/testing';

import { ExamenevcService } from './examenevc.service';

describe('ExamenevcService', () => {
  let service: ExamenevcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamenevcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
