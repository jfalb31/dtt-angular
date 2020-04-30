import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeficiencyViewComponent } from './deficiency-view.component';

describe('DeficiencyViewComponent', () => {
  let component: DeficiencyViewComponent;
  let fixture: ComponentFixture<DeficiencyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeficiencyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeficiencyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
