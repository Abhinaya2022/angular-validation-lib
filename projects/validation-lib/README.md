# angular forcontroller validation-message-library

A library for form validation message in Angular.

## Installation

To install this library, run:

```bash
npm i ngx-form-validation-lib
```

Usage Guide

1. Import ValidationLibModule

```bash
import { ValidationLibModule } from 'ngx-form-validation-lib';
@NgModule({
  imports: [ValidationLibModule],
  })
export class AppModule {}
```

2. Add ngx-input to templete.html

```bash
<ngx-input
  [label]="'Email'"
  [type]="'text'"
  formControlName="email"
></ngx-input>
```

3. add formController in component.ts

```bash
form: new FormGroup({
   email : new FormControl('',[Validators.required,Validators.email]),
})

onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
}
```

Helpers

#The library provides a validation message for formcontroller

. onSubmit
. Required
. Email
. Pattern
. Touched
. Dirty

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
