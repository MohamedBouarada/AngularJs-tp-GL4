import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonStopImagesComponent } from './non-stop-images.component';

describe('NonStopImagesComponent', () => {
  let component: NonStopImagesComponent;
  let fixture: ComponentFixture<NonStopImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonStopImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonStopImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
