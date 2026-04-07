import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MortgageManagementComponent } from './mortgage-management.component';

const routes: Routes = [
  {
    path: '',
    component: MortgageManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageManagementRoutingModule { }
