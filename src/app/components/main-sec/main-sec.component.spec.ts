import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecComponent } from './main-sec.component';

describe('MainSecComponent', () => {
  let component: MainSecComponent;
  let fixture: ComponentFixture<MainSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
