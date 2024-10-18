import { Component, OnInit } from '@angular/core';
import { MULTI_STEP_FORM_DATA } from './shared/constants/multi-step-form-data.constants';
import { FormFieldsComponent } from './shared/components/form-fields/form-fields.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-multi-step-form',
  standalone: true,
  imports: [
    FormFieldsComponent,
    NgIf,
    NgFor
  ],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css'
})
export class MultiStepFormComponent implements OnInit {
  public multiStepFormData = MULTI_STEP_FORM_DATA;
  stepItems!: Array<any>;
  startingIndex: number;
  countSteps!: number;
  public allFormsData: Array<any> = [];
  public formValues = {};
  isCompleted = false;

  constructor() {
    this.startingIndex = 0;
  }

  ngOnInit() {
    this.stepItems = this.multiStepFormData.map(ele => ele.stepname);
    if (this.stepItems) {
      this.countSteps = this.stepItems.length;
    }
  }

  getFormData(formData: any) {
    const matchingIndex = this.allFormsData.findIndex((ele: any) => ele.formName === formData.formName);
    if (matchingIndex > -1) {
      Object.assign(this.allFormsData[matchingIndex], formData);
    } else {
      this.allFormsData.push(formData);
    }

    if (this.countSteps === this.allFormsData.length) {
      this.isCompleted = true;
      console.log('FINAL DATA => ', this.allFormsData);
    }

  }

  setFormData(mathcingFormData: any) {
    this.formValues = mathcingFormData;
  }

  onNewStep(event: any) {
    this.startingIndex = event;

    if (this.startingIndex === this.countSteps - 1) {
      this.submitTotalFormData();
    }
    const mathcingFormData = this.allFormsData.find(ele => ele.formName === this.stepItems[this.startingIndex]);
    if (mathcingFormData && Object.keys(mathcingFormData).length > 0) {
      this.setFormData(mathcingFormData);
    }
  }

  submitTotalFormData() {
    console.log('All Form Value => ', this.allFormsData);
  }
}
