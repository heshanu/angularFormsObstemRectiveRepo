import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor(private ref: ElementRef) {}
  @ViewChild('f') form: any;
  b: boolean = false;
  studentModel: Student = new Student();
  language: string[] = ['sinhala', 'tamil', 'english'];
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.invalid) {
      alert('please enter valid data!');
      return;
    }
    //pass the form object to backend via the service
    alert('success');

    //reset form value after hit the submit button
    this.form.reset();
  }
}
