import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservComponent } from './observ/observ.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormV2Component } from './reactive-form-v2/reactive-form-v2.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservComponent,
    ReactiveFormComponent,
    ReactiveFormV2Component,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
