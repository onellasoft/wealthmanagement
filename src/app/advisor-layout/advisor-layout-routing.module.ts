import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvisorLayoutComponent } from './advisor-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdvisorLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'clients',
        loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)
      },
      {
        path: 'deposit-accounts',
        loadChildren: () => import('./deposit-accounts/deposit-accounts.module').then(m => m.DepositAccountsModule)
      },
      {
        path: 'mortgage',
        loadChildren: () => import('./mortgage-management/mortgage-management.module').then(m => m.MortgageManagementModule)
      },
      {
        path: 'advisor-financing',
        loadChildren: () => import('./advisor-financing-hub/advisor-financing-hub.module').then(m => m.AdvisorFinancingHubModule)
      },
      {
        path: 'life-settlements',
        loadChildren: () => import('./life-settlements-management/life-settlements-management.module').then(m => m.LifeSettlementsManagementModule)
      },
      {
        path: 'credit-card',
        loadChildren: () => import('./credit-cards-hub/credit-cards-hub.module').then(m => m.CreditCardsHubModule)
      },
      {
        path: 'sbl',
        loadChildren: () => import('./sbl-hub-v2/sbl-hub-v2.module').then(m => m.SblHubV2Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorLayoutRoutingModule { }
