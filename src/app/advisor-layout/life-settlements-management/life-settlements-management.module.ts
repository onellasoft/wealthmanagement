import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeSettlementsManagementRoutingModule } from './life-settlements-management-routing.module';
import { LifeSettlementsManagementComponent } from './life-settlements-management.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [
    LifeSettlementsManagementComponent
  ],
  imports: [
    CommonModule,
    LifeSettlementsManagementRoutingModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ]
})
export class LifeSettlementsManagementModule { }
