import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customerForm!: FormGroup;
  customerList:any[]=[];
  submitted: boolean = false;

  get f() {
    return this.customerForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private customerservice: CustomerService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getList();
  }

  initForm(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });
  }

  onSaveOrUpdate(): void {
    if (this.customerForm.invalid) {
      return;
    }
    setTimeout(() => {
      console.log('Response');
      this.submitted = true;
    }, 1000);

    this.customerservice.create(this.customerForm.value)
      .subscribe((res) => {
        //after submiting form and clear
       this.customerForm.reset();
        this.getList();
      },error => {
        alert('Error occured when saving data!'+error);
      },()=>{
        console.log('completed');
    }
        )
  }

  getList(){
    this.customerservice.getAll().subscribe(
      res=>{
        console.log(res);
        this.customerList=res;
      }
    )
  }

  deleteCustomer(){
    this.customerservice.delete(this.customerForm.value).subscribe((res)=>{

    })
  }

}
