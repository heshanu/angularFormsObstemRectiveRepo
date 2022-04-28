import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormV2Component } from './reactive-form-v2.component';

describe('ReactiveFormV2Component', () => {
  let component: ReactiveFormV2Component;
  let fixture: ComponentFixture<ReactiveFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
