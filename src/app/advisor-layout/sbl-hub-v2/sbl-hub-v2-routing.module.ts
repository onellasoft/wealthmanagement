import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SblHubV2Component } from './sbl-hub-v2.component';

const routes: Routes = [
  {
    path: '',
    component: SblHubV2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SblHubV2RoutingModule { }
