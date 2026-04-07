import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SblHubV2RoutingModule } from './sbl-hub-v2-routing.module';
import { SblHubV2Component } from './sbl-hub-v2.component';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    SblHubV2Component
  ],
  imports: [
    CommonModule,
    SblHubV2RoutingModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    TagModule
  ]
})
export class SblHubV2Module { }
