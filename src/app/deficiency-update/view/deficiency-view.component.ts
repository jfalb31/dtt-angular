import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import deficiencies from '../../../helpers/deficiencies';
import { IDeficiency } from './deficiency';

@Component({
  selector: 'app-deficiency-view',
  templateUrl: './deficiency-view.component.html',
  styleUrls: ['./deficiency-view.component.css']
})
export class DeficiencyViewComponent implements OnInit {

  level1Selected: boolean = true;
  level2Selected: boolean = false;
  level3Selected: boolean = false;
  level1Form: FormGroup;
  deficiencies: {};
  objectKeys = Object.keys;

  constructor(private formBuilder: FormBuilder) { 
    this.level1Form = this.formBuilder.group({
      number:  '',
      engDesc: '',
      freDesc: '',
      selectable: '',
      citable: '',
      sort: ''
    });
    this.deficiencies = deficiencies; 
  }

  ngOnInit(): void {
  }

  toggleLevel1Tab(): void {
    this.level1Selected = true;
    this.level2Selected = false;
    this.level3Selected = false;
  }

  toggleLevel2Tab(): void {
    this.level1Selected = false;
    this.level2Selected = true;
    this.level3Selected = false;
  }

  toggleLevel3Tab(): void {
    this.level1Selected = false;
    this.level2Selected = false;
    this.level3Selected = true;
  }

  onSubmit(formData): void{
    this.deficiencies['level1'][formData.number] = {
      level:  1,
      engDesc: formData.engDesc,
      freDesc: formData.freDesc,
      selectable: formData.selectable,
      citable: formData.citable,
      sort: formData.sort
    };
  }
}
