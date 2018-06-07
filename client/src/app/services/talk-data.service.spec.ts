import { TestBed, inject } from '@angular/core/testing';

import { TalkDataService } from './talk-data.service';

describe('TalkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalkDataService]
    });
  });

  it('should be created', inject([TalkDataService], (service: TalkDataService) => {
    expect(service).toBeTruthy();
  }));
});
