import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from '../../app/validators/must-match.validator';

@Component({
  selector: 'app-reactive-form-v2',
  templateUrl: './reactive-form-v2.component.html',
  styleUrls: ['./reactive-form-v2.component.css'],
})
export class ReactiveFormV2Component implements OnInit {
  studentForm!: FormGroup;

  submitted: boolean = false;

  get f() {
    return this.studentForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.studentForm = this.formBuilder.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')],
        ],
        dob: ['', [Validators.required]],
        contactNo: ['', [Validators.required]],
        address: ['', [Validators.required], Validators.maxLength(200)],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        conformPassword: ['', [Validators.required]],
      },
      {
        validators: mustMatch('password', 'conformPassword'),
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;

    console.log(this.studentForm.value);
    console.log(this.studentForm.controls);

    //add values into form controls
    /*
    this.studentForm.patchValue({
      firstName: 'Suranja',
      lastName: 'Liyanage',
      dob: '2013.02.15',
      contactNo: '01236587',
    });
*/
    if (this.studentForm.invalid) {
      alert('Invalid');
    }
  }
  clearForm(): void {
    this.submitted = false;
    this.studentForm.reset();
  }
}
