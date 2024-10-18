import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultiStepFormSectionType } from '../../enums/multi-step-form-section-type.enum';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormFieldFocusDirective } from '../../directives/form-field-focus.directive';
import { SubStepFormComponent } from '../../../sub-step-form/sub-step-form.component';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    FormFieldFocusDirective,
    JsonPipe,
    SubStepFormComponent
  ],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.css'
})
export class FormFieldsComponent {
  @Input() countSteps: any;
  @Input() stepNo: any;
  @Input() formFields: any;
  @Input() formValues: any;
  @Input() stepName: any;
  @Output() formData = new EventEmitter<any>();
  public formName: any;
  @Output() newStep = new EventEmitter<any>();
  @Input() stepId: any;
  gender = '1';

  // SUB FORM DATA
  public sub_multiStepFormData: any;
  sub_stepItems!: Array<any>;
  sub_startingIndex: number;
  sub_countSteps!: number;
  public sub_allFormsData: Array<any> = [];
  public sub_formValues = {};
  sub_form_valid: boolean = false;

  constructor() {
    this.sub_startingIndex = 0;
  }

  ngOnChanges() {
    this.getFormName();
    
  }

  getFormName() {
    this.formName = Object.keys(MultiStepFormSectionType).find((key: string) => MultiStepFormSectionType[key as keyof typeof MultiStepFormSectionType] === this.stepName);

    if (this.formName === 'sub_step_form') {
      this.sub_stepItems = this.formFields.subStepForm.map((ele: any) => ele.stepname);
      if (this.sub_stepItems) {
        this.sub_countSteps = this.sub_stepItems.length;
      }

      this.sub_multiStepFormData = this.formFields.subStepForm;
    } else {
      this.formName = new FormGroup({});
      this.createForm();
    }

  }

  createForm() {
    if (this.formName && Object.keys(this.formValues).length > 0) {
      setTimeout(() => {
        this.formName.patchValue(this.formValues);
      },);
    }
    this.validateForm();
  }

  validateForm() {
    this.formFields?.formFields?.forEach((element: any) => {
      const validatorsArr: ValidatorFn[] = [];

      if (element?.valids?.length > 0) {

        element.valids.forEach((val: any) => {
          if (val.valid === 'required' || val.valid === 'email') {
            validatorsArr.push(Validators[val.valid as keyof typeof Validators] as ValidatorFn);
          }
          if (val.valid === 'pattern') {
            validatorsArr.push(
              Validators.pattern(val.validator)
            );
          }
          if (val.valid === 'minlength') {
            validatorsArr.push(
              Validators.minLength(val.length)
            );
          }
        });

        this.formName.addControl(element.key, new FormControl('', validatorsArr));
      } else {
        this.formName.addControl(element.key, new FormControl(''));
      }
    });

  }

  submit(myForm: any) {
    const obj = Object.assign(this.formName.value, { 'formName': this.stepName });
    this.formData.emit(obj);
    this.newStep.emit(this.stepNo + 1);
    myForm.resetForm();
  }

  gotoStep(stepNo: any) {
    this.newStep.emit(stepNo);
  }

  // sub form functionality

  subGetFormData(sub_formData: any) {
    const matchingIndex = this.sub_allFormsData.findIndex((ele: any) => ele.formName === sub_formData.sub_formName);
    if (matchingIndex > -1) {
      Object.assign(this.sub_allFormsData[matchingIndex], sub_formData);
    } else {
      this.sub_allFormsData.push(sub_formData);
    }

    // go to main form next step when sub form submit successfully
    if (this.sub_allFormsData.length == this.sub_countSteps) {
      this.sub_form_valid = true;

      const obj = Object.assign({'data': this.sub_allFormsData}, { 'formName': this.stepName });
      this.formData.emit(obj);

      this.newStep.emit(this.stepNo + 1);
    }
  }

  subSetFormData(sub_mathcingFormData: any) {
    this.sub_formValues = sub_mathcingFormData;
  }

  subOnNewStep(event: any) {
    this.sub_startingIndex = event;

    if (this.sub_startingIndex === this.sub_countSteps - 1) {
      this.subSubmitTotalFormData();
    }

    const sub_mathcingFormData = this.sub_allFormsData.find(ele => {
      return ele.sub_formName === this.sub_stepItems[this.sub_startingIndex];
    });

    if (sub_mathcingFormData && Object.keys(sub_mathcingFormData).length > 0) {
      this.subSetFormData(sub_mathcingFormData);
    }
  }

  subSubmitTotalFormData() {
    console.log('SUB > All Form Value => ', this.sub_allFormsData);
  }
}
