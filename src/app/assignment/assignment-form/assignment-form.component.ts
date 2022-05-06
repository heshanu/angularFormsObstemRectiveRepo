import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  studentForm!: FormGroup;

  submitted: boolean = false;
  //submittedForm1:boolean = false;
  isLoading: boolean = false;

  /* material form*/
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  /**/

  checked1 = false;

  get f() {
    return this.studentForm.controls;
    // return this.studentForm1.controls;
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
        /*
        dob: ['', [Validators.required]],
        contactNo: ['', [Validators.required, Validators.pattern('/^(\\+\\d{1,3}[- ]?)?\\d{10}$/')]],
        address: ['', [Validators.required], Validators.maxLength(200)],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.minLength(8), Validators.required]],
        conformPassword: ['', [Validators.minLength(8), Validators.required]]
     */
      },
    );
  }


  onSubmit(): void {
    this.submitted = true;


    if (this.studentForm.valid) {

      this.isLoading = true;
      alert("form 1 successfull")

      //avoiding redudancy data insertion
      setTimeout(() => {
        console.log('Response');
        this.checked1=true;
        this.isLoading = false;
      }, 3000)

    }
  }


  clearForm(): void {
    this.submitted = false;
    this.studentForm.reset();
  }


}
