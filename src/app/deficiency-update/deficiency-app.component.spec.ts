import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyAppComponent } from './deficiency-app.component';

describe('DeficiencyAppComponent', () => {
  let component: DeficiencyAppComponent;
  let fixture: ComponentFixture<DeficiencyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
