import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminSidebarComponent } from './common/sidebar/sidebar.component';
import { AdminHeaderComponent } from './common/header/header.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';

import { PRIME_NG_MODULES } from '../prime-ng-modules';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminLayoutRoutingModule,
    ...PRIME_NG_MODULES
  ]
})
export class AdminLayoutModule { }
