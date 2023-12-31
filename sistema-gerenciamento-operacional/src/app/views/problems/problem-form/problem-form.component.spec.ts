import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemFormComponent } from './problem-form.component';

describe('ProblemFormComponent', () => {
  let component: ProblemFormComponent;
  let fixture: ComponentFixture<ProblemFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemFormComponent]
    });
    fixture = TestBed.createComponent(ProblemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
