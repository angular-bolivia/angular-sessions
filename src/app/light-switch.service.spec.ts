import { TestBed, inject } from '@angular/core/testing';

import { LightSwitchService } from './light-switch.service';

describe('LightSwitchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightSwitchService]
    });
  });

  it('should be created', inject([LightSwitchService], (service: LightSwitchService) => {
    expect(service).toBeTruthy();
  }));
});
