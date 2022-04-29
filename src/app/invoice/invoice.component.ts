import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {mustMatch} from "../validators/must-match.validator";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoiceForm !: FormGroup;


  submitted: boolean = false;
  submitted1: boolean = false;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.initForm();
  }

  get f() {
    return this.invoiceForm.controls;
  }

  get lineItems(): FormArray {
    return this.invoiceForm.get('lineItems') as FormArray;
  }

  initForm(): void {
    this.invoiceForm = this.fb.group(
      {
        invoiceNo: ['', Validators.required, Validators.pattern('/0{3,10}|[JY]{2}0{3,8}|[JY]{4}0{3,6}/i')],
        invoiceDate: ['', Validators.required],
        customerName: ['', Validators.required,Validators.pattern('[A-Za-z]{4,15}$')],
        contactNumber: ['', Validators.required],
        address: ['', Validators.required],
        remark: ['', Validators.required]
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitted1 = true;
    if (this.invoiceForm.valid) {


      //avoiding redudancy data insertion
      setTimeout(() => {
        console.log('Response');
        this.isLoading = false;
      }, 3000)
    }
  }

  clearForm(): void {
    this.submitted = false;
    this.invoiceForm.reset();
    console.log(this.submitted);
  }

  c() {
    this.submitted = true;
  }

  c1() {
    this.submitted1 = true;
  }
}
