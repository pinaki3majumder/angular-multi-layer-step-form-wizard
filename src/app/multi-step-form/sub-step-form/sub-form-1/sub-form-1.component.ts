import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-form-1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './sub-form-1.component.html',
  styleUrl: './sub-form-1.component.css'
})
export class SubForm1Component {
  subForm1: FormGroup = new FormGroup({
    companyName: new FormControl('')
  });
  subForm1Submitted: boolean = false;
  @Output() subForm1_Submitted = new EventEmitter<boolean>(false);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subForm1 = this.formBuilder.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.subForm1.controls;
  }

  onSubForm1Submit(): void {
    this.subForm1Submitted = true;

    if (this.subForm1.invalid) {
      return;
    }

    this.subForm1_Submitted.emit(true);
  }
}
