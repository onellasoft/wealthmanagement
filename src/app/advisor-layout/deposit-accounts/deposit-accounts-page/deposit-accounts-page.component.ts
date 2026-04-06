import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DEPOSIT_ACCOUNTS_DATA, IN_PROGRESS_DATA } from '../../../data/deposit-accounts.data';

@Component({
  selector: 'app-deposit-accounts-page',
  standalone: true,
  imports: [CommonModule, TableModule, TooltipModule],
  templateUrl: './deposit-accounts-page.component.html',
  styleUrl: './deposit-accounts-page.component.scss'
})
export class DepositAccountsPageComponent {
  activeTab = 'Deposit Accounts';
  tabs = ['Deposit Accounts', 'In progress'];

  constructor(private router: Router) {}

  get currentAccounts(): any[] {
    return this.activeTab === 'Deposit Accounts' ? DEPOSIT_ACCOUNTS_DATA : IN_PROGRESS_DATA;
  }

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  viewAccount(index: number): void {
    this.router.navigate(['/advisor/deposit-accounts', index]);
  }
}
