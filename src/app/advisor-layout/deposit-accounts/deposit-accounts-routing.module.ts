import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepositAccountsPageComponent } from './deposit-accounts-page/deposit-accounts-page.component';

const routes: Routes = [
  { path: '', component: DepositAccountsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositAccountsRoutingModule { }
