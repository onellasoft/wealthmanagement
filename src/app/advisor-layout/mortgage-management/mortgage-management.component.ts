import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MORTGAGES_DATA, MORTGAGES_IN_PROGRESS_DATA, Mortgage } from '../../data/deposit-accounts.data';

@Component({
  selector: 'app-mortgage-management',
  standalone: false,
  templateUrl: './mortgage-management.component.html',
  styleUrl: './mortgage-management.component.scss'
})
export class MortgageManagementComponent implements OnInit {
  activeTab = 'Mortgages';
  tabs = ['Mortgages', 'In progress'];

  mortgages: Mortgage[] = MORTGAGES_DATA;
  mortgagesInProgress: Mortgage[] = MORTGAGES_IN_PROGRESS_DATA;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/advisor/dashboard']);
  }
}
