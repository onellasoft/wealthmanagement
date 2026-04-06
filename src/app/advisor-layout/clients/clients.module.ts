import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsPageComponent } from './clients-page.component';
import { PRIME_NG_MODULES } from '../../prime-ng-modules';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    ClientsPageComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    DialogModule,
    CalendarModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class ClientsModule { }
