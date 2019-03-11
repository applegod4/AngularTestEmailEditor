import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email.service';
import {expect} from '@angular/platform-browser/testing/src/matchers';
import {describe} from 'jasmine';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailService]
    });
  });

  it('should be created', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
