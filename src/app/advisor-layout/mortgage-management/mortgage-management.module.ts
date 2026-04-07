import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageManagementRoutingModule } from './mortgage-management-routing.module';
import { MortgageManagementComponent } from './mortgage-management.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    MortgageManagementComponent
  ],
  imports: [
    CommonModule,
    MortgageManagementRoutingModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ]
})
export class MortgageManagementModule { }
