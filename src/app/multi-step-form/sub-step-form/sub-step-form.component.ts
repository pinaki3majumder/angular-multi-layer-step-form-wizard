import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FormFieldFocusDirective } from '../shared/directives/form-field-focus.directive';
import { SubMultiStepFormSectionType } from '../shared/enums/multi-step-form-section-type.enum';
import { SubForm1Component } from './sub-form-1/sub-form-1.component';

@Component({
  selector: 'app-sub-step-form',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    ReactiveFormsModule,
    FormFieldFocusDirective,
    SubForm1Component
  ],
  templateUrl: './sub-step-form.component.html',
  styleUrl: './sub-step-form.component.css'
})
export class SubStepFormComponent {
  @Input() sub_countSteps: any;
  @Input() sub_stepNo: any;
  @Input() sub_formFields: any;
  @Input() sub_formValues: any;
  @Input() sub_stepName: any;
  @Output() sub_formData = new EventEmitter<any>();
  public sub_formName: any;
  @Output() sub_newStep = new EventEmitter<any>();

  @Input() sub_stepId: any;
  @Input() parent_stepId: any;
  
  ngOnChanges() {    
    this.getSubFormName();
  }

  getSubFormName() {
    this.sub_formName = Object.keys(SubMultiStepFormSectionType).find((key: string) => SubMultiStepFormSectionType[key as keyof typeof SubMultiStepFormSectionType] === this.sub_stepName);

    if (this.sub_formName) {
      this.sub_formName = new FormGroup({});
      this.createSubStepForm();
    }
  }

  createSubStepForm() {
    if (this.sub_formName && Object.keys(this.sub_formValues).length > 0) {
      setTimeout(() => {
        this.sub_formName.patchValue(this.sub_formValues);
      },);
    }
    this.validateSubStepForm();
  }

  validateSubStepForm() {
    this.sub_formFields?.formFields?.forEach((element: any) => {
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

        this.sub_formName.addControl(element.key, new FormControl('', validatorsArr));
      } else {
        this.sub_formName.addControl(element.key, new FormControl(''));
      }
    });

  }

  sub_submit(myForm: any) {
    const obj = Object.assign(this.sub_formName.value, { 'sub_formName': this.sub_stepName });    
    this.sub_formData.emit(obj);
    this.sub_newStep.emit(this.sub_stepNo + 1);
    myForm.resetForm();
  }

  

  subForm1_Submitted(event: any) {
    event && this.sub_newStep.emit(this.sub_stepNo + 1);
  }
}
