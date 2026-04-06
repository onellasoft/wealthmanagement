import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepositAccountsPageComponent } from './deposit-accounts-page/deposit-accounts-page.component';
import { AccountHoldingsComponent } from './account-holdings/account-holdings.component';

const routes: Routes = [
  { path: '', component: DepositAccountsPageComponent },
  { path: ':index', component: AccountHoldingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepositAccountsRoutingModule { }
