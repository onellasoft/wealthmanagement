import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SBL_ACCOUNTS_DATA, SBL_APPLICATIONS_DATA, SBL_PAYMENTS_DATA, SBL_PROPOSALS_DATA, SBL_STATEMENTS_DATA, SBL_TRANSACTIONS_DATA, SblAccount, SblApplication, SblPayment, SblProposal, SblStatement, SblTransaction } from '../../data/deposit-accounts.data';

@Component({
  selector: 'app-sbl-hub-v2',
  standalone: false,
  templateUrl: './sbl-hub-v2.component.html',
  styleUrl: './sbl-hub-v2.component.scss'
})
export class SblHubV2Component implements OnInit {
  tabs: string[] = ['Proposal', 'Application', 'Accounts', 'Transactions and Statements'];
  activeTab: string = 'Proposal';

  // Sub-tabs for Transactions and Statements
  subTabs: string[] = ['Payment History', 'Statements', 'Transactions'];
  activeSubTab: string = 'Payment History';

  proposals: SblProposal[] = SBL_PROPOSALS_DATA;
  applications: SblApplication[] = SBL_APPLICATIONS_DATA;
  accounts: SblAccount[] = SBL_ACCOUNTS_DATA;
  payments: SblPayment[] = SBL_PAYMENTS_DATA;
  transactions: SblTransaction[] = SBL_TRANSACTIONS_DATA;
  statements: SblStatement[] = SBL_STATEMENTS_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  switchSubTab(tab: string): void {
    this.activeSubTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/advisor/dashboard']);
  }
}
