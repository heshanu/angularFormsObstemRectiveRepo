import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";


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
    this.addNewLine();
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
        invoiceNo: ['', [Validators.required, Validators.pattern('/0{3,10}|[JY]{2}0{3,8}|[JY]{4}0{3,6}/i')]],
        invoiceDate: ['', Validators.required],
        customerName: ['', [Validators.required, Validators.pattern('[A-Za-z]{4,15}$')]],
        contactNumber: ['', Validators.required],
        address: ['', Validators.required],
        remark: ['', Validators.required],
        grossAmount: ['', Validators.required],
        discount: [0, [Validators.min(0), Validators.max(100)]],
        netAmount: ['', [Validators.max(100)]],
        lineItems: this.fb.array([]),
      }
    );
  }

  addNewLine(): void {
    this.lineItems.push(this.initLineItems());
  }

  initLineItems(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      unitPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
      total: ['', Validators.required]
    })
  }

  deleteline(index: number): void {
    if (this.lineItems.length > 1) {
      this.lineItems.removeAt(index);
    } else {
      alert('at least one line shoudl be exits')
    }
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

  // caculation method
  onUnitPriceQuantityChanged(i: number): void {
    //acces values
    const unitPrice: number = Number(this.lineItems.controls[i].get('unitPrice')?.value);
    const quantity: number = Number(this.lineItems.controls[i].get('quantity')?.value);
    this.lineItems.controls[i].get('total')?.setValue(unitPrice * quantity);
    // console.log(this.lineItems.controls.values());

    this.calculateNetAmount();
  }


  calculateNetAmount(): void {
    const discount = Number(this.invoiceForm.get('discount')?.value);
    let netAmount = 0;
    let grossAmount: number = 0;
    for (const formRow of this.lineItems.controls) {
      grossAmount += Number(formRow.get('total')?.value);
    }

    netAmount=grossAmount-((grossAmount*discount)/100);

    //assign value to grossAmount
    this.invoiceForm.get("grossAmount")?.setValue(grossAmount);
    this.invoiceForm.get("netAmount")?.setValue(netAmount);
  }

  clearForm(): void {
    this.submitted = false;
    this.invoiceForm.reset();
    console.log(this.submitted);
  }


}
