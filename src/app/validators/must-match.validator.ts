import { FormGroup } from '@angular/forms';
export function mustMatch(controlName: string, matchingControllerName: string) {
  return (formGrop: FormGroup) => {
    const control = formGrop.controls[controlName];
    const matchingcontrol = formGrop.controls[matchingControllerName];

    //we just check other validation here if we having other one may be predifined validation so that we stop it
    if (matchingcontrol.errors && !matchingcontrol.errors['mustMatch']) {
      return;
    }


    if (control.value !== matchingcontrol.value) {
      matchingcontrol.setErrors({ mustMatch: true });
    } else {
      matchingcontrol.setErrors(null);
    }
  };
}
