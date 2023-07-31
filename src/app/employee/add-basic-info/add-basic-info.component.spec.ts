import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBasicInfoComponent } from './add-basic-info.component';

describe('AddBasicInfoComponent', () => {
  let component: AddBasicInfoComponent;
  let fixture: ComponentFixture<AddBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
