import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorFinancingHubComponent } from './advisor-financing-hub.component';

const routes: Routes = [
  {
    path: '',
    component: AdvisorFinancingHubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorFinancingHubRoutingModule { }
