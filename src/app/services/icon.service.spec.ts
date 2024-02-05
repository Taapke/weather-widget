import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(IconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
