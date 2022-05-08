import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ObservComponent} from './observ/observ.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReactiveFormV2Component} from './reactive-form-v2/reactive-form-v2.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {AssignmentFormComponent} from './assignment/assignment-form/assignment-form.component';
import {AssignmentRoutingModule} from './assignment/assignment-routing.module';
import {AssignmentForm2Component} from './assignment-form/assignment-form2/assignment-form2.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from "@angular/material/radio";
import {AssignmentModule} from "./assignment/assignment.module";
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ObservComponent,
    ReactiveFormComponent,
    InvoiceComponent,
    ReactiveFormV2Component,
    CustomerComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    AppRoutingModule, FormsModule, MatCheckboxModule,
    ReactiveFormsModule, AssignmentRoutingModule,
    BrowserAnimationsModule, MatSliderModule,
    MatCardModule, MatButtonModule, MatRadioModule, AssignmentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
