import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardsHubComponent } from './credit-cards-hub.component';

const routes: Routes = [
  {
    path: '',
    component: CreditCardsHubComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardsHubRoutingModule { }
