import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { problemResolver } from './problem.resolver';

describe('problemResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => problemResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
