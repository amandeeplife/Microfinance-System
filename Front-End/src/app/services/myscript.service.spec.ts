import { TestBed, inject } from '@angular/core/testing';

import { MyscriptService } from './myscript.service';

describe('MyscriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyscriptService]
    });
  });

  it('should be created', inject([MyscriptService], (service: MyscriptService) => {
    expect(service).toBeTruthy();
  }));
});
