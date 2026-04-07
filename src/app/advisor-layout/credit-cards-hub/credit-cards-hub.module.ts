import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardsHubRoutingModule } from './credit-cards-hub-routing.module';
import { CreditCardsHubComponent } from './credit-cards-hub.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    CreditCardsHubComponent
  ],
  imports: [
    CommonModule,
    CreditCardsHubRoutingModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ]
})
export class CreditCardsHubModule { }
