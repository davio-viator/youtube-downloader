import { TestBed } from '@angular/core/testing';

import { Ytdl } from './ytdl';

describe('Ytdl', () => {
  let service: Ytdl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ytdl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
