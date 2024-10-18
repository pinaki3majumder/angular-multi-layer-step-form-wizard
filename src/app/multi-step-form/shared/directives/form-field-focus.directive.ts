import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[formFieldFocus]',
  standalone: true
})
export class FormFieldFocusDirective {

  constructor(private el: ElementRef) { }

  @Input() formGroup: any;

  @HostListener('submit', ['$event'])
  public onSubmit(event: Event): void {
    if ('INVALID' === this.formGroup.status) {
      event.preventDefault();

      const formGroupInvalid = this.el.nativeElement.querySelectorAll('.ng-invalid');
      if (formGroupInvalid.length > 0) {
        (<HTMLInputElement>formGroupInvalid[0]).focus();
      }
    }
  }
}