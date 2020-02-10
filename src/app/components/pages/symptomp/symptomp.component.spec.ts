import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptompComponent } from './symptomp.component';

describe('SymptompComponent', () => {
  let component: SymptompComponent;
  let fixture: ComponentFixture<SymptompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
