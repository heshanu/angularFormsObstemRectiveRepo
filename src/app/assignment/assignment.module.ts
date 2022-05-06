import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AssignmentRoutingModule } from './assignment-routing.module';
import {AssignmentFormComponent} from "./assignment-form/assignment-form.component";

@NgModule({
  declarations: [
    AssignmentFormComponent,

  ],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [
    AssignmentRoutingModule,
    AssignmentFormComponent,

  ]
})
export class AssignmentModule { }
