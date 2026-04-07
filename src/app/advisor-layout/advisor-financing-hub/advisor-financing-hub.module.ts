import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisorFinancingHubRoutingModule } from './advisor-financing-hub-routing.module';
import { AdvisorFinancingHubComponent } from './advisor-financing-hub.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    AdvisorFinancingHubComponent
  ],
  imports: [
    CommonModule,
    AdvisorFinancingHubRoutingModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ]
})
export class AdvisorFinancingHubModule { }
