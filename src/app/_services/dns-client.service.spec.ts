import { TestBed, inject } from '@angular/core/testing';

import { DnsClientService } from './dns-client.service';

describe('DnsClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DnsClientService]
    });
  });

  it('should be created', inject([DnsClientService], (service: DnsClientService) => {
    expect(service).toBeTruthy();
  }));
});
