import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {mustMatch} from '../../app/validators/must-match.validator';

@Component({
  selector: 'app-reactive-form-v2',
  templateUrl: './reactive-form-v2.component.html',
  styleUrls: ['./reactive-form-v2.component.css'],
})
export class ReactiveFormV2Component implements OnInit {
  studentForm!: FormGroup;

  submitted: boolean = false;
  isLoading: boolean = false;

  get f() {
    return this.studentForm.controls;
  }

  constructor(private formBuilder: FormBuilder) {
  }

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
    console.log(this.studentForm.value.email);
    if (this.studentForm.valid) {
      //console.log(this.studentForm.value);
      // console.log(this.studentForm.controls);

      this.isLoading = true;

      //avoiding redudancy data insertion
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      }, 3000)

    }
  }

  clearForm(): void {
    this.submitted = false;
    this.studentForm.reset();
  }
}
