import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunizationRecordComponent } from './immunization-record.component';

describe('ImmunizationRecordComponent', () => {
  let component: ImmunizationRecordComponent;
  let fixture: ComponentFixture<ImmunizationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmunizationRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunizationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
