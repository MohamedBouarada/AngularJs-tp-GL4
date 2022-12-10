import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCvFormComponent } from './add-cv-form.component';

describe('AddCvFormComponent', () => {
  let component: AddCvFormComponent;
  let fixture: ComponentFixture<AddCvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCvFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
