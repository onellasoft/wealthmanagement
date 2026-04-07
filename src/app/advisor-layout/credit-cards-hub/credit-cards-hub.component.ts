import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CREDIT_CARDS_DATA, CREDIT_CARDS_IN_PROGRESS_DATA, CreditCard } from '../../data/deposit-accounts.data';

@Component({
  selector: 'app-credit-cards-hub',
  standalone: false,
  templateUrl: './credit-cards-hub.component.html',
  styleUrl: './credit-cards-hub.component.scss'
})
export class CreditCardsHubComponent implements OnInit {
  tabs: string[] = ['Credit Cards', 'In progress'];
  activeTab: string = 'Credit Cards';

  creditCards: CreditCard[] = CREDIT_CARDS_DATA;
  creditCardsInProgress: CreditCard[] = CREDIT_CARDS_IN_PROGRESS_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/advisor/dashboard']);
  }
}
