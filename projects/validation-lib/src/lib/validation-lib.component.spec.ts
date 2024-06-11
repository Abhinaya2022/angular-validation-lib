import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationLibComponent } from './validation-lib.component';

describe('ValidationLibComponent', () => {
  let component: ValidationLibComponent;
  let fixture: ComponentFixture<ValidationLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationLibComponent]
    });
    fixture = TestBed.createComponent(ValidationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
