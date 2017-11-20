import { TestBed, inject } from '@angular/core/testing';

import { BookResolverServiceService } from './book-resolver-service.service';

describe('BookResolverServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookResolverServiceService]
    });
  });

  it('should be created', inject([BookResolverServiceService], (service: BookResolverServiceService) => {
    expect(service).toBeTruthy();
  }));
});
