import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DEPOSIT_ACCOUNTS_DATA, TRANSACTIONS_DATA, EXTERNAL_ACCOUNTS_DATA, WITHDRAWAL_TRANSACTIONS_DATA, ADD_CASH_TRANSACTIONS_DATA } from '../../../data/deposit-accounts.data';

@Component({
  selector: 'app-account-holdings',
  standalone: true,
  imports: [CommonModule, TableModule, TooltipModule, RadioButtonModule, DialogModule, CheckboxModule, FormsModule],
  templateUrl: './account-holdings.component.html',
  styleUrl: './account-holdings.component.scss'
})
export class AccountHoldingsComponent implements OnInit {
  account: any = null;
  activeTab = 'Transactions';
  tabs = ['Transactions', 'Withdraw Cash', 'Add Cash', 'Account Details'];
  transactions = TRANSACTIONS_DATA;
  externalAccounts = EXTERNAL_ACCOUNTS_DATA;
  selectedExternalAccount: any = null;
  withdrawalTransactions = WITHDRAWAL_TRANSACTIONS_DATA;
  addCashTransactions = ADD_CASH_TRANSACTIONS_DATA;
  viewMode: 'accounts' | 'transactions' = 'accounts'; // For Withdraw Cash
  addCashViewMode: 'accounts' | 'transactions' = 'accounts'; // For Add Cash

  // Modal State
  showWithdrawModal = false;
  withdrawStep = 1;
  withdrawAmount: number | null = 2500;

  showAddCashModal = false;
  addCashStep = 1;
  addCashAmount: number | null = 3000;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.account = DEPOSIT_ACCOUNTS_DATA[index] ?? DEPOSIT_ACCOUNTS_DATA[0];
    if (this.externalAccounts?.length > 0) {
      this.selectedExternalAccount = this.externalAccounts[0];
    }
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
    // Reset view modes to landing page when switching tabs
    this.viewMode = 'accounts'; 
    this.addCashViewMode = 'accounts';
  }

  toggleWithdrawView(): void {
    this.viewMode = this.viewMode === 'accounts' ? 'transactions' : 'accounts';
  }

  toggleAddCashView(): void {
    this.addCashViewMode = this.addCashViewMode === 'accounts' ? 'transactions' : 'accounts';
  }

  // Modal Actions
  openWithdrawModal(): void {
    this.showWithdrawModal = true;
    this.withdrawStep = 1;
    this.withdrawAmount = 2500; // Mock default value as per screenshot
  }

  closeWithdrawModal(): void {
    this.showWithdrawModal = false;
    this.withdrawStep = 1;
  }

  openAddCashModal(): void {
    this.showAddCashModal = true;
    this.addCashStep = 1;
    this.addCashAmount = 3000; // Mock default value as per screenshot
  }

  closeAddCashModal(): void {
    this.showAddCashModal = false;
    this.addCashStep = 1;
  }

  nextStep(): void {
    if (this.withdrawStep < 3) {
      this.withdrawStep++;
    }
  }

  prevStep(): void {
    if (this.withdrawStep > 1) {
      this.withdrawStep--;
    }
  }

  addCashNextStep(): void {
    if (this.addCashStep < 3) {
      this.addCashStep++;
    }
  }

  addCashPrevStep(): void {
    if (this.addCashStep > 1) {
      this.addCashStep--;
    }
  }

  goBack(): void {
    this.router.navigate(['/advisor/deposit-accounts']);
  }
}
