import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AssignmentForm2Component} from "./assignment-form2/assignment-form2.component";
import {AssignmentFormComponent} from "./assignment-form/assignment-form.component";
//import {AssignmentForm3Component} from "./assignment-form3/assignment-form3.component";

const routes: Routes = [
  { path: "form1", component:AssignmentFormComponent}
 ,

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
