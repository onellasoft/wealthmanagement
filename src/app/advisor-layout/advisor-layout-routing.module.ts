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
        path: 'solutions',
        loadComponent: () => import('./solutions-hub/solutions-hub.component').then(m => m.SolutionsHubComponent)
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
      },
      {
        path: 'new-account-creation',
        children: [
          {
            path: '',
            loadComponent: () => import('./new-account-creation/new-account-creation.component').then(m => m.NewAccountCreationComponent)
          },
          {
            path: 'credit-card',
            loadComponent: () => import('./new-account-creation/credit-card-application/credit-card-application.component').then(m => m.CreditCardApplicationComponent)
          },
          {
            path: 'credit-card-details',
            loadComponent: () => import('./new-account-creation/credit-card-details/credit-card-details.component').then(m => m.CreditCardDetailsComponent)
          },
          {
            path: 'advisor-documents',
            loadComponent: () => import('./new-account-creation/advisor-documents/advisor-documents.component').then(m => m.AdvisorDocumentsComponent)
          },
          {
            path: 'application-summary',
            loadComponent: () => import('./new-account-creation/application-summary/application-summary.component').then(m => m.ApplicationSummaryComponent)
          },
          {
            path: 'email-workflow',
            loadComponent: () => import('./new-account-creation/email-workflow/email-workflow.component').then(m => m.EmailWorkflowComponent)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvisorLayoutRoutingModule { }
