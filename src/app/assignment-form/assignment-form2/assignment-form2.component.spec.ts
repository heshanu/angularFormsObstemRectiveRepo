import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentForm2Component } from './assignment-form2.component';

describe('AssignmentForm2Component', () => {
  let component: AssignmentForm2Component;
  let fixture: ComponentFixture<AssignmentForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
