import { NgModule } from '@angular/core';
import { ValidationLibComponent } from './validation-lib.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ValidationLibComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ValidationLibComponent],
})
export class ValidationLibModule {}
