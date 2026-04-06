import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvisorLayoutRoutingModule } from './advisor-layout-routing.module';
import { AdvisorLayoutComponent } from './advisor-layout.component';
import { AdvisorSidebarComponent } from './common/sidebar/sidebar.component';
import { AdvisorHeaderComponent } from './common/header/header.component';


import { PRIME_NG_MODULES } from '../prime-ng-modules';

@NgModule({
  declarations: [
    AdvisorLayoutComponent,
    AdvisorSidebarComponent,
    AdvisorHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdvisorLayoutRoutingModule,
    ...PRIME_NG_MODULES
  ]
})
export class AdvisorLayoutModule { }
