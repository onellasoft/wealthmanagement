import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeSettlementsManagementComponent } from './life-settlements-management.component';

const routes: Routes = [
  {
    path: '',
    component: LifeSettlementsManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeSettlementsManagementRoutingModule { }
