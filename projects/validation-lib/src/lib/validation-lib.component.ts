import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'ngx-input',
  templateUrl: './validation-lib.component.html',
  styles: [],
})
export class ValidationLibComponent implements ControlValueAccessor {
  @Input('type') type = 'text';
  @Input('label') label = '';

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  get control() {
    return this.controlDir.control as FormControl;
  }
}
