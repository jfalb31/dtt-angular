import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePickerComponent } from './language.picker.component';

describe('Language.PickerComponent', () => {
  let component: Language.PickerComponent;
  let fixture: ComponentFixture<Language.PickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Language.PickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Language.PickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
